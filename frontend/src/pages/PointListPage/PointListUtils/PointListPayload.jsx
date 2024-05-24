export function createPayload(clientName, floors) {
	const payload = {
		clientName: clientName,
		floors: floors.map((floorNumber) => ({
			floor: floorNumber,
			disciplines: {
				HVAC: {
					equipmentList: [
						{
							instrumentList: []
						}
					]
				},
				Hidraulica: {
					equipmentList: [
						{
							instrumentList: []
						}
					]
				},
				Eletrica: {
					equipmentList: [
						{
							instrumentList: []
						}
					]
				}
			}
		}))
	};

	return payload;
}
