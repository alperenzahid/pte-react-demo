import React, { useState, useCallback,useEffect } from 'react'
import Card from './Card'
import update from 'immutability-helper'
const style = {
    width: 800,
};

let gcards = [];

const Container = (props) => {
    {


        const [cards, setCards] = useState([]);

        useEffect(() => {
            setCards((cards) => {
                return props.options.map((option,index) => {
                    return {
                        id : index + 1,
                        text : option
                    }
                })
            })
        }, [props.options]);

        useEffect(() => {
            gcards = [];//ilk başta sıfırlanır;
        }, []);

        const moveCard = useCallback(
            (dragIndex, hoverIndex) => {
                const dragCard = cards[dragIndex];
                setCards(
                    update(cards, {
                        $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                    }),
                );
            },
            [cards],
        );
        const renderCard = (card, index) => {
            gcards[index] = card.id;
            return (
                <Card
                    key={card.id}
                    index={index}
                    id={card.id}
                    text={card.text}
                    moveCard={moveCard}
                />
            )
        };
        return (
            <>
                <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
            </>
        )
    }
};
export {Container,gcards}
