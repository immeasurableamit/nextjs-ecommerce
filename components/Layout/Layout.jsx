import React from "react"
import Header from "../Header/Header"
import LeftSideBar from "../LeftSideBar/LeftSideBar"

export default function Layout({children}) {
    return (
        <>
            <Header />
            <LeftSideBar />
            {children}
            
            <button class="btn btn-danger btn-icon" id="back-to-top">
                <i class="ri-arrow-up-line"></i>
            </button>
        </>
    )
}