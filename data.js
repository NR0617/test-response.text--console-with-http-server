// const func = async () => {
//     const data = await fetch("http://192.168.4.247:8080");
//     console.log(data.json());
// };

//func();

// const func = () => {
//     fetch("http://192.168.4.247:8080")
//         .then((res) => res.json())
//         .then((data) => console.log(data));
//     // console.log(data.json());
// };

const func = () => {
    fetch("http://localhost:3001")
        .then((res) => res.text())
        .then((data) => console.log(data));
    // console.log(data.json());
};

const delete1 = () => {
    fetch("http://localhost:3000/test")
        .then((res) => res.json())
        .then((res) => console.log(typeof res[0].id));
};
