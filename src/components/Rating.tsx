import { faStar as OutlineStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as FilledStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface RatingProps {
    label: string;
    score: number;
}

export default function Rating(props: RatingProps)
{
    const [score, setScore] = useState<number[]>([
        0, 0, 0, 0, 0
    ]);

    useEffect(() => {
        let currentScore = [...score];
        currentScore = [0, 0, 0, 0, 0].fill(1, 0, props.score);
        setScore(currentScore);
    }, [props, score])

    return (
        <>
            <p className="h5 fw-bold m-0">
                {props.label}
                { props.score == 5 && (
                    <FontAwesomeIcon icon={faTrophy} fixedWidth className="text-warning ms-1" />
                ) }
            </p>
            <ul className="list-inline m-0 p-0">
                { score.map((s: number, i: number) => (
                    <li className="list-inline-item" key={i}>
                        <FontAwesomeIcon icon={s == 1 ? FilledStar : OutlineStar} fixedWidth />
                    </li>
                )) }
            </ul>
        </>
    );
}