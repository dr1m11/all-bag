'use client'

import {useRef} from "react";
import store from "@/app/store/store";
import {Provider} from "react-redux";

export default function StoreProvider({children}) {
    const storeRef = useRef()
    if (!storeRef.current)
        storeRef.current = store()

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}