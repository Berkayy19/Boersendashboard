import axios from "axios";

const API_URL = "http://localhost:8080/api/stocks";

export const fetchStock = async (symbol) => {
    try {
        const response = await axios.get(`${API_URL}/${symbol}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching stock:", error);
        return null;
    }
};
