# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
movies = Movie.create([
  {
    name: 'Encanto',
    poster: 'https://lumiere-a.akamaihd.net/v1/images/encanto_p_243_ster_29_23e974a4.jpeg',
    start_date: '2021-11-27',
    end_date: '2021-12-7',
  },
  {
    name: 'Eternals',
    poster: 'https://www.mundopeliculas.tv/wp-content/uploads/2019/08/eternals-logo.jpg',
    start_date: '2021-11-27',
    end_date: '2021-11-30',
  },
  {
    name: 'Ghostbusters: El legado',
    poster: 'https://www.dondeir.com/wp-content/uploads/2021/10/ghostbusters-el-legado-mira-el-nuevo-trailer-internacional.jpg',
    start_date: '2021-11-27',
    end_date: '2021-12-7',
  },
  {
    name: 'Venom: Carnage liberado',
    poster: 'https://mx.web.img3.acsta.net/pictures/21/08/31/16/11/0282026.jpg',
    start_date: '2021-11-27',
    end_date: '2021-11-30',
  },
  {
    name: 'Jack en la caja maldita',
    poster: 'https://elcomercio.pe/resizer/evVSJbKgqp0t_LuOhSG5zgLTx28=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/PN6E2HQMJFGPRMF7PQBGQM535A.png',
    start_date: '2021-11-27',
    end_date: '2021-12-7',
  },
  {
    name: 'Espíritus oscuros',
    poster: 'https://imagenes.gatotv.com/categorias/peliculas/posters/espiritus_oscuros.jpg',
    start_date: '2021-11-27',
    end_date: '2021-12-7',
  },
])

screenings = Screening.create([
  {
    schedule: 'Noche',
    room: 4,
    movie: movies[4],
  },
  {
    schedule: 'Noche',
    room: 5,
    movie: movies[4],
  },
  {
    schedule: 'Noche',
    room: 8,
    movie: movies[4],
  },
  {
    schedule: 'Noche',
    room: 2,
    movie: movies[3],
  },
  {
    schedule: 'Tanda',
    room: 2,
    movie: movies[3],
  },
  {
    schedule: 'Tanda',
    room: 3,
    movie: movies[3],
  },
  {
    schedule: 'Noche',
    room: 3,
    movie: movies[5],
  },
  {
    schedule: 'Noche',
    room: 6,
    movie: movies[5],
  },
  {
    schedule: 'Noche',
    room: 7,
    movie: movies[5],
  },
  {
    schedule: 'Matiné',
    room: 4,
    movie: movies[0],
  },
  {
    schedule: 'Matiné',
    room: 8,
    movie: movies[0],
  },
  {
    schedule: 'Tanda',
    room: 4,
    movie: movies[0],
  },
  {
    schedule: 'Tanda',
    room: 8,
    movie: movies[0],
  },
  {
    schedule: 'Matiné',
    room: 1,
    movie: movies[2],
  },
  {
    schedule: 'Tanda',
    room: 1,
    movie: movies[2],
  },
  {
    schedule: 'Noche',
    room: 1,
    movie: movies[2],
  },
  {
    schedule: 'Tanda',
    room: 5,
    movie: movies[1],
  },
  {
    schedule: 'Noche',
    room: 5,
    movie: movies[1],
  },
  {
    schedule: 'Tanda',
    room: 6,
    movie: movies[1],
  },
  {
    schedule: 'Noche',
    room: 6,
    movie: movies[1],
  },
  {
    schedule: 'Tanda',
    room: 7,
    movie: movies[1],
  },
  {
    schedule: 'Noche',
    room: 7,
    movie: movies[1],
  },
])

rows = ['A', 'B', 'C', 'D']
columns = (1..12).to_a

Booking.create([
  rows.map{
    |row| columns.map{
      |column| {
        booker: 'EvaleenHierofalco@harakirimail.com',
        date: '2021-11-28',
        row: row,
        column: column,
        screening: screenings[13],
      }
    }
  }
])
