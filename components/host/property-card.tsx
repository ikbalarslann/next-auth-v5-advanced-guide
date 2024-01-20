"use client";

import React, { useState, useEffect } from "react";

interface Property {
  title: string;
  description: string;
}

const PropertyCard = ({ property }: { property: Property }) => {
  const [test, setTest] = useState<Property[]>([]);

  useEffect(() => {
    const storedTest = localStorage.getItem("test");
    if (storedTest) {
      setTest(JSON.parse(storedTest));
    }
  }, []);

  const handleCardClick = () => {
    // Use push directly on the array
    test.push(property);

    // Update the state with the new array
    setTest([...test]);

    // Store the updated test array in localStorage
    localStorage.setItem("test", JSON.stringify(test));
  };

  return (
    <div
      className="bg-red-200 rounded-md text-center"
      key={property.title}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <h3 className="text-red-600">{property.title}</h3>
      <p>{property.description}</p>
    </div>
  );
};

export default PropertyCard;
