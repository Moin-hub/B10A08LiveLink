

const LineChart = () => {
const gadgetsPrice = [
    { "id": 1, "name": "Smartphone", "price": 900 },
    { "id": 2, "name": "Laptop", "price": 1200 },
    { "id": 3, "name": "Tablet", "price": 600},
    { "id": 4, "name": "Smartwatch", "price": 250 },
    { "id": 5, "name": "Earbuds", "price": 169 },
    { "id": 6, "name": "Gaming Console", "price": 500 },
    { "id": 7, "name": "Camera", "price": 700 },
    { "id": 8, "name": "Drone","price": 600 },
    { "id": 9, "name": "VR Headset", "price": 360 },
    { "id": 10, "name": "E-Reader", "price": 140 },
    { "id": 11, "name": "Smart Speaker","price": 120 }
  ]


    return (
        <div>
            <BarChart width={600} height={500} data={gadgetsPrice}>
    <XAxis dataKey="name" tick={renderCustomAxisTick} />
    <YAxis />
    <Bar dataKey="id" barSize={30} fill="#8884d8"
      label={renderCustomBarLabel}/>
  </BarChart>
        </div>
    );
};

export default LineChart;