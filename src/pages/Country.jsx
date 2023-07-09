import { fetchCountry } from 'service/country-service';
import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Country = () => {
  const [country, setCountry] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await fetchCountry(id);
        console.log(data);
      } catch (error) {
      } finally {
      }
    };
    getCountry();
  }, [id]);
  return (
    <Section>
      <Container>
        <h2>Country</h2>
      </Container>
    </Section>
  );
};
