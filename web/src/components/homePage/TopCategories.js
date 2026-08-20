import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect, useRef } from "react"; // Added hooks
import { TopCategoriesStyles } from "../../styles/homePage/TopCategoriesStyles";
import ActivityGrid from "../category/ActivityGrid";
import ParagraphText from "../typography/ParagraphText";
import { SectionTitle } from "../typography/Title";
import ValueGrid from "../category/ValueGrid";
import ObjectiveGrid from "../category/ObjectiveGrid";
import { FaHardHat, FaEye, FaBullseye, FaSync } from "react-icons/fa"; // Added sync icon
import CategoryGrid from "../category/CategoryGrid";

const initialCards = [
  {
    id: "mission",
    title: "Our Mission",
    text: "To supply top-tier aluminium products and durable hardware to builders, contractors, and DIY enthusiasts, ensuring every project is built to last.",
    theme: "theme-slate",
    icon: <FaBullseye />,
  },
  {
    id: "vision",
    title: "Our Vision",
    text: "To be the leading and most trusted structural hardware and aluminium hub, recognized for premium quality, endless solutions, and exceptional service.",
    theme: "theme-dark",
    icon: <FaEye />,
  },
  {
    id: "capabilities",
    title: "Extensive Inventory",
    text: "From heavy-duty fasteners to custom aluminium extrusions and professional-grade tools, our catalog is engineered to handle your most demanding structural needs.",
    theme: "theme-yellow",
    icon: <FaHardHat />
  }
];

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          activity {
            id
            title
            slug { current }
            _rawDescription
          }
        }
      }
      allSanityCategory {
        nodes {
          id
          title
          slug { current }
          coverImage {
            alt
            asset { gatsbyImageData }
          }
          _rawDescription
        }
      }
      allSanityObjective { nodes { id, title, _rawDescription } }
      allSanityValue { nodes { id, title, _rawDescription } }
    }
  `);

  const spotlightNode = data.allSanitySpotlight.nodes[0];
  const activities = spotlightNode?.activity || [];
  const objectives = data.allSanityObjective?.nodes || [];
  const DiginotiveValues = data.allSanityValue?.nodes || [];
  const categories = data.allSanityCategory?.nodes || [];

  const [stackedCards, setStackedCards] = useState(initialCards);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Control auto-shuffle
  const autoPlayRef = useRef();

  const shuffle = () => {
    setStackedCards((prev) => {
      const newCards = [...prev];
      const firstCard = newCards.shift();
      newCards.push(firstCard);
      return newCards;
    });
  };

  // Auto-switch interval
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(shuffle, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying]);

  const handleManualClick = (id, e) => {
    e.stopPropagation(); // Ensures only direct clicks on cards are counted
    setIsAutoPlaying(false); // Stop auto-play permanently after direct interaction
    
    setStackedCards((prev) => {
      const index = prev.findIndex((c) => c.id === id);
      if (index === prev.length - 1) return prev;
      const newCards = [...prev];
      const [clickedCard] = newCards.splice(index, 1);
      newCards.push(clickedCard);
      return newCards;
    });
  };

  return (
    <TopCategoriesStyles>
      <div className="card-stack-wrapper">
        <div className="card-stack-container">
          {stackedCards.map((card, index) => {
            const isTop = index === stackedCards.length - 1;
            const offset = stackedCards.length - 1 - index;
            
            return (
              <div
                key={card.id}
                className={`stacked-card ${card.theme} card-depth-${offset} ${isTop && isAutoPlaying ? 'pulse-hint' : ''}`}
                onClick={(e) => handleManualClick(card.id, e)}
                style={{
                  zIndex: index,
                  '--card-offset': offset,
                  opacity: isTop ? 1 : 0.8,
                }}
              >
                <div className="card-header">
                  <h3>{card.title}</h3>
                  <div className="card-icon">{card.icon}</div>
                </div>
                <div className="card-body">
                  <p>{card.text}</p>
                </div>
                
                {/* ACCESSIBILITY/UX HINT */}
                {isTop && (
                  <div className="interaction-hint">
                    <FaSync /> <span>{isAutoPlaying ? "Auto-Cycling" : "Interactive Mode"}</span>
                  </div>
                )}

                {!isTop && <div className="card-click-overlay"></div>}
              </div>
            );
          })}
        </div>
      </div>

      <CategoryGrid categories={categories} />

      <div style={{ marginTop: '10rem', marginBottom: '4rem' }}>
        <SectionTitle className="centre__text">
          Engineered Operational Pillars
        </SectionTitle>
        <ParagraphText className="centre__text" style={{ maxWidth: '800px', margin: '1rem auto' }}>
          Beyond standard hauling. These specialized divisions represent the tactical core of our industrial response—where advanced logistics meets unshakeable site clearing execution.
        </ParagraphText>
      </div>

      <ActivityGrid activities={activities} />

      <div style={{ marginTop: "6rem" }}>
        <SectionTitle className="centre__text">Operational Values</SectionTitle>
        <ValueGrid DiginotiveValues={DiginotiveValues} />
      </div>

      <div style={{ marginTop: "6rem" }}>
        <SectionTitle className="centre__text">Strategic Objectives</SectionTitle>
        <ObjectiveGrid objectives={objectives} />
      </div>
    </TopCategoriesStyles>
  );
}

export default TopCategories;