import { ReactNode, useEffect, useState } from 'react'
import Back from '~/components/Back'
import Layout from '~/layout'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { THotel, TCheapestRoom } from '~/Types/Hotel'
import { api } from '~/utils'
import { TEvent } from '~/Types/Event'
import { TUser } from '~/Types/Users'
import { useLocalStorage } from 'usehooks-ts'
import dayjs from 'dayjs'
import Modal from '~/components/Modal'
import QRCode from 'react-qr-code'

const Button = ({
  children,
  active = false,
  onClick,
}: {
  children?: ReactNode
  active?: boolean
  onClick?: () => void
}) => {
  return (
    <button
      {...{ onClick }}
      className={twMerge(
        'py-1 text-lg  border-b-2 border-transparent',
        active ? 'font-bold border-sand-12' : 'hover:border-sand-6'
      )}
    >
      {children}
    </button>
  )
}

const Hotels = () => {
  const [hotels, setHotels] = useState<(THotel & { price: number })[]>([])
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await api.get('hotels')
        const cheapest_rooms: TCheapestRoom[] = res.data.cheapest_rooms
        const hotels = res.data.hotels.map((hotel: THotel) => ({
          ...hotel,
          price: cheapest_rooms.find(
            (room) => room.Hotel.hotel_id === hotel.hotel_id
          )?.Room.price_per_night,
        }))
        setHotels(hotels)
      } catch (err) {}
    }
    fetchHotels()
  }, [])

  return hotels.map(
    ({ hotel_id, name, stars, address, city, country, price }) => (
      <Link
        key={hotel_id}
        href={`/book/hotel/${hotel_id}`}
        className="relative col-span-12 overflow-hidden rounded-lg h-96 sm:col-span-6 lg:col-span-4"
        style={{
          background: `url(https://pix8.agoda.net/hotelImages/14654101/-1/a7c3c9a7db41d9ec49737d3506e854d3.jpg?ce=0&s=1024x768&isSkia=true)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute bottom-0 flex flex-col w-full p-4 bg-sand-2">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">{name}</h3>
            <div className="flex items-center gap-1">
              <h6 className="text-sm">{stars}</h6>
              <Icon icon="solar:star-bold" className="text-yellow-9" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="carbon:location-filled" className="text-green-10" />
            <h6 className="text-sm">{[address, city, country].join(' ')}</h6>
          </div>

          <h4 className="self-end text-2xl font-bold text-sand-11">
            ฿ {price}
          </h4>
        </div>
      </Link>
    )
  )
}

const Events = () => {
  const [events, setEvents] = useState<TEvent[]>([])
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get('events')

        setEvents(res.data)
      } catch (err) {}
    }
    fetchEvents()
  }, [])

  return events.map(
    ({
      event_id,
      name,
      image,
      location,
      availability,
      event_type,
      start_date,
      end_date,
      price,
      capacity,
    }) => (
      <Link
        key={event_id}
        href={`/book/event/${event_id}`}
        className="relative col-span-12 overflow-hidden rounded-lg h-96 sm:col-span-6 lg:col-span-4"
        style={{
          background: `url(https://cbz-backend.peerawitp.me/imgs/${image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute bottom-0 flex flex-col w-full gap-1 p-4 bg-sand-2">
          <div className="px-1 rounded-lg text-green-1 w-fit bg-green-8">
            {event_type}
          </div>

          <div className="flex justify-between">
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="carbon:location-filled" className="text-green-10" />
            <h6 className="text-sm">{location}</h6>
          </div>

          <div className="flex items-center gap-1">
            <Icon
              icon="material-symbols:calendar-month"
              className="text-green-10"
            />
            <h6 className="text-sm">
              {/* show event date from start to end date using dayjs */}
              {dayjs(start_date).format('DD/MM/YYYY')} -{' '}
              {dayjs(end_date).format('DD/MM/YYYY')}
            </h6>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="ic:twotone-event-seat" className="text-green-10" />
            <h6 className="text-sm">
              {availability}/{capacity}
            </h6>
          </div>

          <h4 className="self-end text-2xl font-bold text-sand-11">
            ฿ {price}
          </h4>
        </div>
      </Link>
    )
  )
}

const BookingList = () => {
  const [user] = useLocalStorage<TUser | null>('user', null)
  const [eventBooked, setEventBooked] = useState<any[]>([])
  const [hotelBooked, setHotelBooked] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [ticketType, setTicketType] = useState<'EVENT' | 'HOTEL'>('EVENT')
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get('getUserBookedEvent/' + user?.id)

        setEventBooked(res.data)
      } catch (err) {}
    }
    fetchEvents()

    const fetchHotels = async () => {
      try {
        const res = await api.get('getUserBookedHotel/' + user?.id)

        setHotelBooked(res.data)
      } catch (err) {}
    }
    fetchHotels()
  }, [])

  return [
    eventBooked.map(
      ({
        Event: {
          event_id,
          name,
          image,
          location,
          availability,
          event_type,
          start_date,
          end_date,
          price,
          capacity,
        },
        EventBooking: { booking_id, guest_name, user_id, guest_email },
      }) => (
        <>
          <Modal
            {...{
              isOpen,
              onClose: () => setIsOpen(false),
              // set to capitalize
              title:
                ticketType.charAt(0) +
                ticketType.slice(1).toLowerCase() +
                ' Check-in',
            }}
            className="max-w-[40rem]"
            description="Use this QR code to check-in."
          >
            <div className="flex justify-center my-10">
              <QRCode value="lorem ipsum" />
            </div>
          </Modal>
          <div
            key={event_id}
            className="relative col-span-12 overflow-hidden rounded-lg h-96 sm:col-span-6 lg:col-span-4"
            style={{
              background: `url(https://cbz-backend.peerawitp.me/imgs/${image})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute bottom-0 flex flex-col w-full gap-1 p-4 bg-sand-2">
              <div className="px-1 rounded-lg text-green-1 w-fit bg-green-8">
                {event_type}
              </div>

              <div className="flex justify-between">
                <h3 className="text-xl font-bold">Ticket for {name}</h3>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="carbon:location-filled" className="text-green-10" />
                <h6 className="text-sm">{location}</h6>
              </div>

              <div className="flex items-center gap-1">
                <Icon
                  icon="material-symbols:calendar-month"
                  className="text-green-10"
                />
                <h6 className="text-sm">
                  {/* show event date from start to end date using dayjs */}
                  {dayjs(start_date).format('DD/MM/YYYY')} -{' '}
                  {dayjs(end_date).format('DD/MM/YYYY')}
                </h6>
              </div>

              <button
                onClick={() => {
                  setIsOpen(true)
                  setTicketType('EVENT')
                }}
                className="flex items-center px-2 py-1 my-2 border rounded w-fit border-green-12 hover:bg-sand-4 group"
              >
                <h5>Event Check-in</h5>
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  className="hidden group-hover:block"
                />
              </button>
            </div>
          </div>
        </>
      )
    ),
    hotelBooked.map(
      ({
        Hotel: { hotel_id, name, stars, address, city, country, image },
        Booking: { booking_id, guest_name, user_id, guest_email },
        Room: { room_id, room_type, price_per_night },
      }) => (
        <>
          <div
            key={hotel_id}
            className="relative col-span-12 overflow-hidden rounded-lg h-96 sm:col-span-6 lg:col-span-4"
            style={{
              background: `url(https://pix8.agoda.net/hotelImages/14654101/-1/a7c3c9a7db41d9ec49737d3506e854d3.jpg?ce=0&s=1024x768&isSkia=true)`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute bottom-0 flex flex-col w-full p-4 bg-sand-2">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold">{name}</h3>
                <div className="flex items-center gap-1">
                  <Icon icon="carbon:ticket" className="text-yellow-9" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="carbon:location-filled" className="text-green-10" />
                <h6 className="text-sm">
                  {[address, city, country].join(' ')}
                </h6>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="carbon:ticket" className="text-green-10" />
                <h6 className="text-sm">Booking ID: {booking_id}</h6>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="carbon:person" className="text-green-10" />
                <h6 className="text-sm">Guest Name: {guest_name}</h6>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="carbon:hospital-bed" className="text-green-10" />
                <h6 className="text-sm">Room Type: {room_type}</h6>
              </div>

              <button
                onClick={() => {
                  setIsOpen(true)
                  setTicketType('HOTEL')
                }}
                className="flex items-center px-2 py-1 my-2 border rounded w-fit border-green-12 hover:bg-sand-4 group"
              >
                <h5>Hotel Check-in</h5>
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  className="hidden group-hover:block"
                />
              </button>
            </div>
          </div>
        </>
      )
    ),
  ]
}
function Booking() {
  const [active, setActive] = useState<'HOTEL' | 'EVENT' | 'BOOKINGLIST'>(
    'EVENT'
  )

  return (
    <Layout>
      <div
        className="w-full h-[25vh] px-6"
        style={{
          background: 'url(assets/bg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="container px-4 mx-auto">
        <Back href="/" className="mt-4" />
        <h2 className="my-6 text-4xl font-bold text-green-12">Booking</h2>
        <div className="flex gap-4">
          <Button
            active={active === 'EVENT'}
            onClick={() => setActive('EVENT')}
          >
            Events
          </Button>
          <Button
            active={active === 'HOTEL'}
            onClick={() => setActive('HOTEL')}
          >
            Hotels
          </Button>

          <Button
            active={active === 'BOOKINGLIST'}
            onClick={() => setActive('BOOKINGLIST')}
          >
            Booking list
          </Button>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-10">
          {active === 'EVENT' && <Events />}
          {active === 'HOTEL' && <Hotels />}
          {active === 'BOOKINGLIST' && <BookingList />}
        </div>
        {/* {news.length > 0 ? (
          <div className="grid grid-cols-12 gap-6 mt-10">
            {news.map(({ title, id, description, images }, i) => (
              <News
                key={i}
                id={id}
                title={title}
                description={description}
                coverImg={
                  images.length > 0
                    ? "https://cbz-backend.peerawitp.me/imgs/" + images[0].image
                    : undefined
                }
                href={`/news/${id}`}
              />
            ))}
          </div>
        ) : (
          <h4>News are empty.</h4>
        )} */}
      </div>
    </Layout>
  )
}

export default Booking
