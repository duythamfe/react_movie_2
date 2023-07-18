import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const <Movie></Movie>Context = createContext();

function MovieProvider(props) {
    const { storedValue, setValue } = useLocalStorage("photos", fakeData);
    const { storedValue: cartStored, setValue: setCartStored } = useLocalStorage("cartStored", []);
    const { show, setShow, eRef } = useClickOutSite();
    const [photos, setPhotos] = useState(storedValue);
    const [cart, setCart] = useState(cartStored);
    const [favoriteList, setFavoriteList] = useState([]);

    console.log(show);

    function toggleLike(photoId) {
        const updateArray = photos.map((photo) => {
            if (photo.id === photoId) {
                return { ...photo, favorite: !photo.favorite }
            }
            return (photo)
        });
        setPhotos(updateArray);
        setValue(updateArray);
    };

    function addToCart(photo) {
        setCart((prevCart) => {
            const isExisted = prevCart.some((item) => item.id === photo.id);
            if (isExisted) {
                setCartStored(prevCart);
                return prevCart; // Không cần đặt lại giỏ hàng nếu sản phẩm đã tồn tại
            } else {
                setCartStored([...prevCart, photo]);
                return [...prevCart, photo]; // Thêm sản phẩm mới vào giỏ hàng
            }
        });
    }


    function removeFromCart(photoId) {
        setCart((prevCart) => {
            const updateCard = prevCart.filter((item) => item.id !== photoId)
            setCartStored(updateCard);
            return updateCard;
        })
    }

    function emptyCart() {
        setCart([]);
    }

    const value = { photos, setPhotos, cart, setCart, favoriteList, setFavoriteList, toggleLike, addToCart, removeFromCart, emptyCart, show, setShow, eRef };

    return (
        <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
    )
}

function useGallery() {
    const context = useContext(GalleryContext);
    if (typeof context === "undefined") {
        throw new Error("useGallery mush be used within a AuthProvider tags");
    }
    return context;
}

export { GalleryProvider, useGallery };