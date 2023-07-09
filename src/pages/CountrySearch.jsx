import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  // const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    const getRegion = async () => {
      try {
        const data = await fetchByRegion(query);
        setCountries(data);
      } catch (error) {}
    };
    getRegion();
  }, [searchParams]);

  const handleSubmit = searchQuery => {
    // setQuery(searchQuery);
    setSearchParams({ query: searchQuery });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
