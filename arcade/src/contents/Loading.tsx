import React from 'react';
import { isPropertySignature } from 'typescript';

interface LoadingProps {
    message: string
}

const Loading: React.FC<LoadingProps> = (props) => {
    return (
        <div className="min-h-screen">
            {props.message}
        </div>
    );
};

export default Loading;