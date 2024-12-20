import React, { useState, useEffect } from "react";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { Grid } from "@consta/uikit/Grid";
import { Pagination } from "@consta/uikit/Pagination";
import { Loader } from "@consta/uikit/Loader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./ServicePage.css";

const SERVICES_URL = "https://673423afa042ab85d1190055.mockapi.io/api/v1/services";

const ServicePage = () => {
  const [allCards, setAllCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const cardsPerPage = 9;

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(SERVICES_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllCards(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate, user]);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = allCards.slice(startIndex, startIndex + cardsPerPage);

  if (isLoading) {
    return (
      <div className="loader">
        <Loader size="m" />
      </div>
    );
  }

  if (error) {
    return <Text view="alert" size="l">Error: {error}</Text>;
  }

  return (
    <div className="content">
        <Grid cols={3} gap="x10" style={{ marginBottom: "20px" }}>
        {currentCards.map((card) => (
            <Card
                key={card.id}
                verticalSpace="l"
                horizontalSpace="l"
                shadow
                style={{ backgroundColor: "#fff", borderRadius: "8px", width: "100%" }}
            >
                <img className="image"
                src={card.image}
                alt={card.name}
                />
                <Text weight="bold" size="l" style={{ marginBottom: "10px", color: "#333" }}>
                {card.name}
                </Text>
                <Text size="m" style={{ color: "#666" }}>
                {card.description}
                </Text>
            </Card>
        ))}
        </Grid>
        <Pagination className="paginator"
            totalPages={Math.ceil(allCards.length / cardsPerPage)}
            currentPage={currentPage}
            onChange={({ value }) => setCurrentPage(value)}
        />
    </div>
  );
};

export default ServicePage;
