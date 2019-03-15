import React from "react";
import ExpansionPanel from "../helpers/ExpansionPanel";
import "./index.css";

export default (activePanel) => {
  //console.log("Search Result category", activePanel );
  return (
    <>
      <ExpansionPanel
        heading="Electronics"
        activePanel = {activePanel.category === "Electronics" ? activePanel:false}
        content={[
          { id: 1, cat: "All", path: "Electronics" },
          { id: 2, cat: "Camera & photo", path: "Electronics" },
          { id: 3, cat: "Cell phones", path: "Electronics" },
          { id: 4, cat: "Others", path: "Electronics" }
        ]}
      />
      <ExpansionPanel
        heading="Apparel"
        activePanel = {activePanel.category === "Apparel" ? activePanel :false}
        content={[
          { id: 1, cat: "All", path: "Apparel" },
          { id: 2, cat: "Accessories", path: "Apparel" },
          { id: 3, cat: "Shoes", path: "Apparel" },
          { id: 4, cat: "Clothing", path: "Apparel" }
        ]}
      />
      <ExpansionPanel
        heading="Home-Decor"
        activePanel = {activePanel.category === "Home-Decor" ? activePanel :false}
        content={[
          { id: 1, cat: "All", path: "Home-Decor" },
          { id: 2, cat: "Art prints", path: "Home-Decor" },
          { id: 3, cat: "Lighting", path: "Home-Decor" },
          { id: 4, cat: "Decorative Bottles", path: "Home-Decor" }
        ]}
      />
      <ExpansionPanel
        heading="Toys"
        activePanel = {activePanel.category === "Toys" ? activePanel :false}
        content={[
          { id: 1, cat: "All ", path: "Toys" },
          { id: 2, cat: "Shapes & Colors", path: "Toys" },
          { id: 3, cat: "Kid's Electronics", path: "Toys" },
          { id: 4, cat: "Sports & Outdoor Play", path: "Toys" },
          { id: 5, cat: "Stuffed Animals & Plush Toys", path: "Toys" }
        ]}
      />
      <ExpansionPanel heading="Gift Cards" content={[]} />
    </>
  );
};
