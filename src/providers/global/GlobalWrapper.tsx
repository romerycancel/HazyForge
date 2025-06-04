"use client";
import App from "@/App";
import { ZustandProvider } from "@/providers/zustand-provider";
import React, { ReactNode, Suspense, use, useEffect } from "react";
import Loading from "@/components/loading/Loader";

interface IProps {
    children?: ReactNode;
}

const ProviderComponent = ({ children }: IProps) => {
    return (
        <ZustandProvider>
            <Suspense fallback={<Loading />}>
                <App>{children}</App>
            </Suspense>
        </ZustandProvider>
    );
};

export default ProviderComponent;
