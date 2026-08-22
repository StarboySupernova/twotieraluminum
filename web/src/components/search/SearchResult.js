import React from "react";
import { useFlexSearch } from "react-use-flexsearch";
import {
  AuthorSearchResultItem,
  BlogSearchResultItem,
  CategorySearchResultItem,
  ActivitySearchResultItem,
  ObjectiveSearchResultItem,
  ValueSearchResultItem,
} from "./SearchResultItem";
import ParagraphText from "../typography/ParagraphText";
import { Title } from "../typography/Title";

function SearchResult({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
  authorsIndexStore,
  activitiesIndexStore,
  objectivesIndexStore,
  valuesIndexStore,
}) {
  const blogsResult = useFlexSearch(searchQuery, JSON.stringify(blogsIndexStore.index), blogsIndexStore.store);
  const categoriesResult = useFlexSearch(searchQuery, JSON.stringify(categoriesIndexStore.index), categoriesIndexStore.store);
  const authorsResult = useFlexSearch(searchQuery, JSON.stringify(authorsIndexStore.index), authorsIndexStore.store);
  const activitiesResult = useFlexSearch(searchQuery, JSON.stringify(activitiesIndexStore.index), activitiesIndexStore.store);
  const objectivesResult = useFlexSearch(searchQuery, JSON.stringify(objectivesIndexStore.index), objectivesIndexStore.store);
  const valuesResult = useFlexSearch(searchQuery, JSON.stringify(valuesIndexStore.index), valuesIndexStore.store);

  if (
    blogsResult.length === 0 &&
    categoriesResult.length === 0 &&
    authorsResult.length === 0 &&
    activitiesResult.length === 0 &&
    objectivesResult.length === 0 &&
    valuesResult.length === 0
  ) {
    return <ParagraphText>No Result Found.</ParagraphText>;
  }

  const headerStyle = { fontSize: '1.6rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary)' };

  return (
    <>
      {blogsResult.length > 0 && (
        <>
          <Title style={headerStyle}>Insights & News</Title>
          {blogsResult.map((result) => <BlogSearchResultItem key={result.id} blog={result} />)}
        </>
      )}
      {activitiesResult.length > 0 && (
        <>
          <Title style={headerStyle}>Operational Pillars</Title>
          {activitiesResult.map((result) => <ActivitySearchResultItem key={result.id} activity={result} />)}
        </>
      )}
      {categoriesResult.length > 0 && (
        <>
          <Title style={headerStyle}>Sectors</Title>
          {categoriesResult.map((result) => <CategorySearchResultItem key={result.id} category={result} />)}
        </>
      )}
      {authorsResult.length > 0 && (
        <>
          <Title style={headerStyle}>Leadership Team</Title>
          {authorsResult.map((result) => <AuthorSearchResultItem key={result.id} author={result} />)}
        </>
      )}
      {objectivesResult.length > 0 && (
        <>
          <Title style={headerStyle}>Our Objectives</Title>
          {objectivesResult.map((result) => <ObjectiveSearchResultItem key={result.id} objective={result} />)}
        </>
      )}
      {valuesResult.length > 0 && (
        <>
          <Title style={headerStyle}>Our Values</Title>
          {valuesResult.map((result) => <ValueSearchResultItem key={result.id} value={result} />)}
        </>
      )}
    </>
  );
}

export default SearchResult;