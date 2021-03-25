import React from 'react';
import { makeStyles, WithStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { classicNameResolver } from 'typescript';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

interface Props {
    countSecondTime?: Long;
}

export default function ProgressBar<Props>() {
    const countSecondTime = 60;
    const refreshMSecTime = 500;
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => { });
    React.useEffect(() => {
        progressRef.current = () => {
            const diff = 100 * refreshMSecTime / countSecondTime / 1000;
            const diff2 = diff;
            if (progress > 100) {
                setProgress(0);
                setBuffer(diff);
            } else {
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, refreshMSecTime);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
        </div>
    );
}