
// Dependencies
import { ImageList, ImageListItem, Box } from '@mui/material';
// Assets
import chipmunk_tolmie from '../../assets/photography/chipmunk_tolmie.jpg'
import dolly_oceanshores from '../../assets/photography/dolly_ocean_shores.jpg'
import hawaii_lighthouse from '../../assets/photography/hawaii_lighthouse.jpg'
import hawaii_manoa from '../../assets/photography/hawaii_manoa_falls.jpg'
import luis_rainier from '../../assets/photography/luis_rainier.jpg'
import luis_rainier_two from '../../assets/photography/luis_rainier_two.jpg'
import ocean_shores_water from '../../assets/photography/ocean_shores_water.JPG'
import seattle_night from '../../assets/photography/seattle_night.jpg'
import tolmie_base from '../../assets/photography/tolmie_base.jpg'
import tulip_barn from '../../assets/photography/tulip_barn.jpg'
import wallace_base from '../../assets/photography/wallace_bridge.jpg'
import wallace_fall from '../../assets/photography/wallace_fall.jpg'
import wallace_fall_two from '../../assets/photography/wallace_fall_two.jpg'
import wallace_lookout from '../../assets/photography/wallace_lookout.jpg'




export default function Photos() {


    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${
                size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
        };
    }


    return (

        <Box sx={{ alignItems: 'center', mx: 'auto' }}>

            <ImageList
                sx={{ width: '98%', height: '90%', mx: 'auto'}}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>

        </Box>


    );
}

const itemData = [
    {
        img: chipmunk_tolmie,
        title: 'chipmunk_tolmie',
        rows: 3,
        cols: 2
    },
    {
        img: dolly_oceanshores,
        title: 'dolly_oceanshores',
        rows: 3,
        cols: 2
    },
    {
        img: hawaii_lighthouse,
        title: 'hawaii_lighthouse',
        rows: 4,
        cols: 4
    },
    {
        img: hawaii_manoa,
        title: 'hawaii_manoa',
        rows: 3,
        cols: 2
    },
    {
        img: luis_rainier,
        title: 'luis_rainier',
        rows: 5,
        cols: 2
    },
    {
        img: ocean_shores_water,
        title: 'ocean_shores_water',
        rows: 2,
        cols: 2
    },
    {
        img: seattle_night,
        title: 'seattle_night',
        rows: 3,
        cols: 2
    },
    {
        img: tulip_barn,
        title: 'tulip_barn',
        rows: 2,
        cols: 2
    },
    {
        img: wallace_fall,
        title: 'wallace_fall',
        rows: 4,
        cols: 2
    },
    {
        img: wallace_base,
        title: 'wallace_base',
        rows: 3,
        cols: 2
    },
    {
        img: tolmie_base,
        title: 'tolmie_base',
        rows: 3,
        cols: 4
    },
    {
        img: luis_rainier_two,
        title: 'luis_rainier_two',
        rows: 5,
        cols: 2
    },
    {
        img: wallace_fall_two,
        title: 'wallace_fall_two',
        rows: 3,
        cols: 2
    },
    {
        img: wallace_lookout,
        title: 'wallace_lookout',
        rows: 2,
        cols: 2
    }
]