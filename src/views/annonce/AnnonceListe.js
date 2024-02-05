import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {Container} from "@mui/system";
import {
    Avatar,
    Button, Chip,
    Divider,
    Grid, IconButton,
    InputAdornment,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead, TableRow,
    TextField,
    Typography
} from "@mui/material";
import {IconSearch} from "@tabler/icons";


const AnnonceListe = () => {
  return (
      <Container>
          <Typography variant="h5" gutterBottom>
              Product List
          </Typography>
          <Divider />
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <TextField
                      placeholder="Search Product"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputProps={{
                          startAdornment: (
                              <InputAdornment position="start">
                                  <IconSearch />
                              </InputAdornment>
                          ),
                      }}
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Button variant="contained" color="primary" size="large">
                      Copy
                  </Button>
                  <Button variant="contained" color="primary" size="large">
                      Print
                  </Button>
                  <Button variant="contained" color="primary" size="large">
                      Filter
                  </Button>
                  <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginLeft: '8px' }}
                  >
                      Add Product
                  </Button>
              </Grid>
          </Grid>
          <TableContainer>
              <Table aria-labelledby="tableTitle">
                  <TableHead>
                      <TableRow>
                          <TableCell>
                              <Chip label="In Stock" size="small" color="default" />
                          </TableCell>
                          <TableCell align="center">#</TableCell>
                          <TableCell align="left">Product Name</TableCell>
                          <TableCell align="left">Created</TableCell>
                          <TableCell align="right">Price</TableCell>
                          <TableCell align="right">Sale Price</TableCell>
                          <TableCell align="center">Status</TableCell>
                          <TableCell align="center">Action</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {/* Map through your product data and render rows */}
                      {/* Sample row */}
                      <TableRow>
                          <TableCell>
                              <Chip label="In Stock" size="small" color="default" />
                          </TableCell>
                          <TableCell align="center">
                              <Avatar alt="Product Image" src="product-image-url" />
                          </TableCell>
                          <TableCell align="left">
                              <Typography variant="subtitle1">Product Name</Typography>
                          </TableCell>
                          <TableCell align="left">Mon, Jan 22 2024</TableCell>
                          <TableCell align="right">$275</TableCell>
                          <TableCell align="right">$</TableCell>
                          <TableCell align="center">
                              <Chip label="In Stock" size="small" color="default" />
                          </TableCell>
                          <TableCell align="center">
                              <IconButton>
                                  <MoreHorizOutlinedIcon />
                              </IconButton>
                          </TableCell>
                      </TableRow>
                      {/* Repeat the above TableRow for each product */}
                  </TableBody>
              </Table>
          </TableContainer>
          <script type="text/javascript" async="" src="https://pt.wisernotify.com/pixel.js?ti=1jclj6jkfc4hhry"></script>
      </Container>
  )
}
export default AnnonceListe