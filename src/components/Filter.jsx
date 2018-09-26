import React from 'react';
import {Input, Menu} from 'semantic-ui-react';

const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => {

    return (
        <Menu secondary>
            <Menu.Item
                active={filterBy === 'all'}
                onClick={setFilter.bind(this, 'all')}
            >Все</Menu.Item>
            <Menu.Item
                active={filterBy === 'price_high'}
                onClick={setFilter.bind(this, 'price_high')}
            >Цена (дорогие)</Menu.Item>
            <Menu.Item
                active={filterBy === 'price_low'}
                onClick={setFilter.bind(this, 'price_low')}
            >Цена (дешевые)</Menu.Item>
            <Menu.Item
                active={filterBy === 'author'}
                onClick={setFilter.bind(this, 'author')}
            >Автор</Menu.Item>
            <Menu.Item>
                <Input  icon='search'
                        onChange={e => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        placeholder='Введите запрос...'>
                </Input>
            </Menu.Item>
        </Menu>
    )
};

export default Filter;