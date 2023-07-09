import { fetchCountry } from 'service/country-service';
import {
  Section,
  Container,
  CountryInfo,
  Loader,
  Heading,
  GoBackBtn,
} from 'components';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  
  const goBackLink = location.state?.from ?? routes.HOME;

  useEffect(() => {
    const getCountry = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCountry(id);
        setCountry(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCountry();
  }, [id]);
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}>Go Back</GoBackBtn>
        {error && <Heading>{error}</Heading>}
        {isLoading && <Loader />}
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};
