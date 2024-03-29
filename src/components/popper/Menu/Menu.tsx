import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const defaultFn = () => { };

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }: any) {
        const [history, setHistory] = useState([{ data: items }]);
        const current: any = history[history.length - 1];

        const renderItems = () => {
                return current.data.map((item: any, index: number) => {
                        const isParent = !!item.children;

                        return (
                                <MenuItem
                                        key={index}
                                        data={item}
                                        onClick={() => {
                                                if (isParent) {
                                                        setHistory((prev) => [...prev, item.children]);
                                                } else {
                                                        onChange(item);
                                                }
                                        }}
                                />
                        );
                });
        };

        const handleBack = () => {
                setHistory((prev) => prev.slice(0, prev.length - 1));
        };

        const renderResult = (attrs: any) => (
                <div className="w-[220px] bg-white text-black rounded-[8px] shadow-lg" tabIndex="-1" {...attrs}>
                        <PopperWrapper className="py-2">
                                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                                <div className="w-full flex flex-col">{renderItems()}</div>
                        </PopperWrapper>
                </div>
        );

        // Reset to first page
        const handleReset = () => {
                setHistory((prev) => prev.slice(0, 1));
        };

        return (
                <Tippy
                        interactive
                        delay={[0, 50]}
                        offset={[12, 8]}
                        hideOnClick={hideOnClick}
                        placement="bottom-end"
                        render={renderResult}
                        onHide={handleReset}
                >
                        {children}
                </Tippy>
        );
}

Menu.propTypes = {
        children: PropTypes.node.isRequired,
        items: PropTypes.array,
        hideOnClick: PropTypes.bool,
        onChange: PropTypes.func,
};

export default Menu;
