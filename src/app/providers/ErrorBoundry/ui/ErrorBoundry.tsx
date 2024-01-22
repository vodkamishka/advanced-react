import React, { type ErrorInfo, type ReactNode, Suspense } from 'react';
import { ErrorPage } from 'pages/ErrorPage';

interface ErrorBoundaryProps {
    children: ReactNode
}
interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError () {
        // Update state so the next render will show the fallback UI.
        console.log(22222);
        return { hasError: true };
    }

    componentDidCatch (error: Error, info: ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.log(error, info);
    }

    render () {
        const { hasError } = this.state;
        const { children } = this.props;
        console.log(hasError);
        if (hasError) {
            return (
                <Suspense>
                    <ErrorPage/>
                </Suspense>
            );
        }

        return children;
    }
}
