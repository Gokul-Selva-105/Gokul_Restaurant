const BASE_URL = "/api";

export const fetchAllMenu = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/employee/AllMenu`);
    if (!response.ok) {
      throw new Error(`Failed to fetch menu: ${response.statusText}`);
    }
    const data = await response.json();
    return data.AllMenu.slice(0, 20);
  } catch (error) {
    console.error("Error fetching menu:", error);
    return [];
  }
};

