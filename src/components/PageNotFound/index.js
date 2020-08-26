import React from 'react';

import './index.scss';
import ErrorTitle from './ErrorTitle';

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <div className="page-not-found__title-wrapper">
                <ErrorTitle title="Страница не найдена. Ошибка 404 :("/>
            </div>
        </div>
    );
};

export default PageNotFound;
