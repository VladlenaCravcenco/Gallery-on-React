import axios from 'axios';

async function axiosFetch(API_URL, data = {}, method = 'POST', isFormData = true) {
  try {
    const headers = isFormData
      ? { 'Content-Type': 'multipart/form-data' }
      : { 'Content-Type': 'application/json' };

    const response = await axios({
      url: API_URL,
      method,
      data: isFormData ? data : JSON.stringify(data),
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("❌ API ошибка:", error);
    return null;
  }
}

export default axiosFetch;
