import React from "react";
import "./EachFeature.css";

const EachFeature = ({ icon, title, description, backgroundColor }) => {
    return (
        <div
            style={{
                width: "220px",
                backgroundColor: backgroundColor || "#e3f2fd",
                padding: "15px",
                borderRadius: "12px",
                boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                fontFamily: "Arial, sans-serif"
            }}
            className="each-feature"
        >
            <div
                style={{
                    position: "relative",
                    width: "50px",
                    height: "50px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
                }}
                className="each-feature-icon"
            >
                {icon}
            </div>
            <h3 style={{ marginTop: "10px", fontSize: "16px", fontWeight: "bold", color: "#333" }} className="each-feature-heading">
                {title}
            </h3>
            <p style={{ fontSize: "12px", color: "#666" }} className="each-feature-description">
                {description}
            </p>
        </div>
    );
};

export default EachFeature;
