import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import useClickOutSite from "../hooks/useClickOutSite";

const GalleryContext = createContext();

const fakeData = [
    {
        id: 1,
        url: "https://i.pinimg.com/564x/a7/66/39/a766398fa2a429f6640911d6ef2d9cf9.jpg",
        favorite: false
    },
    {
        id: 2,
        url: "https://i.pinimg.com/564x/f5/5a/89/f55a8936b8d00d2f20aa0256ad4039fb.jpg",
        favorite: false
    },
    {
        id: 3,
        url: "https://i.pinimg.com/736x/aa/f0/78/aaf0789d6dc9e7907ea75d1784e126ab.jpg",
        favorite: false
    },
    {
        id: 4,
        url: "https://i.pinimg.com/564x/35/b9/33/35b933fbe8c4ba68fccf489e02b7a475.jpg",
        favorite: false
    },
    {
        id: 5,
        url: "https://i.pinimg.com/564x/8f/c1/b7/8fc1b73161e5aeb9ae75d0200681718f.jpg",
        favorite: false
    },
    {
        id: 6,
        url: "https://i.pinimg.com/564x/95/38/7d/95387d554fcd00bb2ca08f5b9ae0af1c.jpg",
        favorite: false
    },
]

function GalleryProvider(props) {
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