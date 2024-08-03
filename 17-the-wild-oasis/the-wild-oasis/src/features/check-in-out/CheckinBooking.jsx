import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Checkbox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
	/* Box */
	background-color: var(--color-grey-0);
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);
	padding: 2.4rem 4rem;
`;

function CheckinBooking() {
	const [confirmPaid, setConfirmPaid] = useState(false);
	const [addBreakfast, setAddBreakfast] = useState(false);
	const { booking, isPending } = useBooking();
	const { settings, isPending: isSettingsPending } = useSettings();
	const moveBack = useMoveBack();
	const { checkin, isCheckingIn } = useCheckin();
	const breakfastPrice = settings?.breakfastPrice * booking?.numGuests * booking?.numNights;
	useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

	if (isPending || isSettingsPending) return <Spinner />;

	const { id: bookingId, guests, totalPrice, numGuests, hasBreakfast, numNights } = booking;
	console.log(bookingId, guests, totalPrice, numGuests, hasBreakfast, numNights, Box, BookingDataBox);

	function handleCheckin() {
		if (!confirmPaid) return;
		if (addBreakfast) {
			checkin({
				bookingId,
				breakfast: {
					hasBreakfast: true,
					extrasPrice: breakfastPrice,
					totalPrice: totalPrice + breakfastPrice,
				},
			});
		} else {
			checkin({ bookingId, breakfast: {} });
		}
	}
	console.log(settings);

	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">Check in booking #{bookingId}</Heading>
				<ButtonText onClick={moveBack}>&larr; Back</ButtonText>
			</Row>

			<BookingDataBox booking={booking} />
			{!hasBreakfast && (
				<Box>
					<Checkbox
						checked={addBreakfast}
						onChange={() => {
							setAddBreakfast((add) => !add);
							setConfirmPaid(false);
						}}
						id="addBreakfast"
						disabled={isSettingsPending}>
						Add breakfast for {formatCurrency(breakfastPrice)}
					</Checkbox>
				</Box>
			)}
			<Box>
				<Checkbox
					checked={confirmPaid}
					onChange={() => setConfirmPaid((confirm) => !confirm)}
					id="confirm"
					disabled={confirmPaid || isCheckingIn}>
					I confirm that {guests.name} has paid the total amount of{" "}
					{!addBreakfast
						? formatCurrency(totalPrice)
						: `${formatCurrency(totalPrice + breakfastPrice)}  
						   (${formatCurrency(totalPrice)} +  ${formatCurrency(breakfastPrice)})`}
					.
				</Checkbox>
			</Box>

			<ButtonGroup>
				<Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
					Check in booking #{bookingId}
				</Button>
				<Button variation="secondary" onClick={moveBack}>
					Back
				</Button>
			</ButtonGroup>
		</>
	);
}

export default CheckinBooking;
