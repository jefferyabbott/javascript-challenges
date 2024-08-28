function analyzeCarMileage(cars) {
    const totalMileage = cars.reduce((totalMileage, car) => totalMileage + car.mileage, 0);
    const highestMileageCar = cars.reduce((highestMileage, car) => highestMileage.mileage > car.mileage ? highestMileage : car);
    const lowestMileageCar = cars.reduce((lowestMileage, car) => lowestMileage.mileage < car.mileage ? lowestMileage : car);

    return {
        averageMileage: totalMileage / cars.length,
        highestMileageCar,
        lowestMileageCar,
        totalMileage,
    }

}

module.exports = analyzeCarMileage;
