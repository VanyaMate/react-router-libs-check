import { ComponentPropsWithoutRef, FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';


export type UniquePageProps =
    {
        uniqueId: string;
    }
    & ComponentPropsWithoutRef<'div'>;

export const UniquePage: FC<UniquePageProps> = memo(function UniquePage (props) {
    const { uniqueId } = props;
    const navigate     = useNavigate();

    const getRandomId = function () {
        return crypto.randomUUID();
    };

    const onClickHandler = function () {
        navigate(`/unique/${ getRandomId() }`);
    };

    return (
        <div>
            UniquePage id:{ uniqueId }
            <button onClick={ onClickHandler }>go to random id</button>
        </div>
    );
});