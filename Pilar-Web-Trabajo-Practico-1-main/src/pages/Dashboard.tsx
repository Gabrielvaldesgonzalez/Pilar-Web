import {Layout } from "../layouts/Layout";
import {Box, Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

export const Dashboard = () =>{
    return (
        <Layout>
            <Box display={"flex"}>
            <Card  sx={{ maxWidth: 345, margin: 5 }}>
                <CardActionArea content='a' href='/todo'>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/todo.png"
                        sx={{ objectFit: "contain" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Todo
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card  sx={{ maxWidth: 345, margin: 5 }}>
                <CardActionArea content='a' href='/todo'>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/pockeball.png"
                        sx={{ objectFit: "contain" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Feching list
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Box>
        </Layout>
    );
}