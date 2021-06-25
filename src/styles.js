import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        backgrounColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    }
}));

export default useStyles;