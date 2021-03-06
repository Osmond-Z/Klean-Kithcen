import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import PeopleIcon from "@material-ui/icons/PeopleOutlined";

const TotalCustomers = (props: any) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} style={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            TOTAL CUSTOMERS
          </Typography>
          <Typography color="textPrimary" variant="h3">
            1,600
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            style={{
              backgroundColor: green[600],
              height: 56,
              width: 56,
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        style={{
          alignItems: "center",
          display: "flex",
          paddingTop: 2,
        }}
      >
        <ArrowUpwardIcon style={{ color: green[900] }} />
        <Typography
          variant="body2"
          style={{
            color: green[900],
            marginRight: 1,
          }}
        >
          16%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default TotalCustomers;
