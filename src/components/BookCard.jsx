import React from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react';



const BookCard = (book) => {
    const {title, author, price, image, addToCart, addedCount} = book;
    return (
        <Card>
            <Image src={image}/>
            <Card.Content>
                <Card.Header>
                    {title}
                </Card.Header>
                <Card.Meta>
                <span className='date'>
                    {author}
                </span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='money bill alternate outline'/>
                    {price}
                </a>
            </Card.Content>
            <Button
                onClick={addToCart.bind(this, book)}
            >
                Добавить в карзину {addedCount > 0 && `(${addedCount})` }
            </Button>
        </Card>
    );
};

export default BookCard;