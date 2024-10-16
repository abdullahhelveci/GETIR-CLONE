import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants";

// Başlangıç durumu

const cartItems = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            // Eğer öğeler nesne ise, benzersiz bir özellik ile karşılaştırın
            return state.filter(cartItem => cartItem.product.id !== action.payload.id);
        case CLEAR_CART:
            return []; // Sepeti temizler
       // Mevcut durumu döndür
    }
    return state
};

export default cartItems;