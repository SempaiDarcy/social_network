import React, {Component} from "react";
import {Preloader} from "../components/common/Preloader/Preloader";

export function withSuspense<P>(Component: React.ComponentType & any) {
    return function WithSuspense(props: P) {
        return (
            <React.Suspense fallback={<Preloader/>}>
                <Component {...props} />
            </React.Suspense>
        );
    };
}
