// helpers/index.js

// ✅ Чистый и логичный экспорт из папки helpers

export const NO_IMAGE_URL = 'https://via.placeholder.com/300x200';

export const ONE_PRODUCT_EMPTY_DATA = {
  title: '',
  price: '',
  image_url: NO_IMAGE_URL,
};

// ❌ axiosFetch больше не используется (был для старого API)
// ❌ API_URL, GET_PRODUCTS_LIST, SET_LIKE — устаревшее

// 🔧 Можно добавить сюда утилиты в будущем:
// - validateEmail()
// - formatPrice()
// - getUserInitials()

// Пример:
// export const formatPrice = (price) => `€${parseFloat(price).toFixed(2)}`;
