// import React, { useEffect, useState } from 'react';
// import "./DashBoad.css";
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import axios from 'axios';

// const DashBoard = () => {
//   const [orders, setOrders] = useState([]);
//   const [filterType, setFilterType] = useState('total');
//   const [isLoading, setIsLoading] = useState(false);
//   const [totalOrdersCount, setTotalOrdersCount] = useState(0); // State to store total orders count

//   useEffect(() => {
//     const fetchOrders = async () => {
//       setIsLoading(true);
//       try {
//         const token = localStorage.getItem("userToken");
//         const response = await axios.get("https://swift-laundry.vercel.app/get-all-orders", {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         if (response.data && response.data.data) {
//           setOrders(response.data.data);
//           setTotalOrdersCount(response.data.data.length); // Set total orders count
//         } else {
//           console.log("Response data is not in the expected format:", response.data);
//         }
//       } catch (error) {
//         console.log("Error fetching user orders:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleFilterChange = (filter) => {
//     setFilterType(filter);
//   };

//   const filteredOrders = orders.filter(order => {
//     if (filterType === 'total') {
//       return true;
//     } else if (filterType === 'pending') {
//       return order.status === 'pending';
//     } else if (filterType === 'completed') {
//       return order.status === 'completed';
//     }
//     return false;
//   });

//   return (
//     <div className='mainDashboardDivs'>
//       <article className='taskNumberDiv'>
//         <section className='cardNumbers1' onClick={() => handleFilterChange('total')}>
//           <p>TOTAL ORDERS</p>
//           <h1>{totalOrdersCount}</h1> {/* Display total orders count */}
//         </section>

//         <section className='cardNumbers2' onClick={() => handleFilterChange('pending')}>
//           <p>PENDING ORDERS</p>
//           <h1>{totalOrdersCount}</h1>
//         </section>

//         <section className='cardNumbers3' onClick={() => handleFilterChange('completed')}>
//           <p>COMPLETED ORDERS</p>
//           <h1>0</h1>
//         </section>
//       </article>

//       <article className='itemOrderDiv'>
//       <div className='companyDiv'>
//         <p>COMPANY</p>
//         <p>DATE</p>
//         <p>STATUS</p>
//       </div>
    
//       <div className='companyDiv2'>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           filteredOrders.length === 0 ? (
//             <p>No order completed yet</p>
//           ) : (
//             filteredOrders.map(order => (
//               <section className='orderItems' key={order._id}>
//                 <img src={order.shop?.profileImage} alt="" className='commmImage'/>
//                 <p>{order.shop?.businessName}</p>
//                 <p>{order.phoneNumber}</p>
//                 <p>{order.date}</p>
//                 <p>{order.status}</p>
//                 <p><RiDeleteBin6Line style={{ width: "30px", height: "20px" }} /></p>
//               </section>
//             ))
//           )
//         )}
//       </div>
//     </article>
    
//     </div>
//   );
// };

// export default DashBoard;








// import React, { useEffect, useState } from 'react';
// import "./DashBoad.css";
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import axios from 'axios';

// const DashBoard = () => {
//   const [orders, setOrders] = useState([]);
//   const [totalOrdersCount, setTotalOrdersCount] = useState(0); // State to store total orders count
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       setIsLoading(true);
//       try {
//         const token = localStorage.getItem("userToken");
//         const response = await axios.get("https://swift-laundry.vercel.app/get-all-orders", {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         if (response.data && response.data.data) {
//           setOrders(response.data.data);
//           setTotalOrdersCount(response.data.data.length); // Set total orders count
//         } else {
//           console.log("Response data is not in the expected format:", response.data);
//         }
//       } catch (error) {
//         console.log("Error fetching user orders:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className='mainDashboardDivs'>
//       <article className='taskNumberDiv'>
//         <section className='cardNumbers1'>
//           <p>TOTAL ORDERS</p>
//           <h1>{totalOrdersCount}</h1> {/* Display total orders count */}
//         </section>
//         <section className='cardNumbers2' onClick={() => handleFilterChange('pending')}>
//           <p>PENDING ORDERS</p>
//            <h1>0</h1>
//          </section>
//          <section className='cardNumbers3' onClick={() => handleFilterChange('completed')}>
//            <p>COMPLETED ORDERS</p>
//            <h1>0</h1>
//          </section>
//       </article>

//       <article className='itemOrderDiv'>
//         <div className='companyDiv'>
//           <p>COMPANY</p>
//           <p>DATE</p>
//           <p>STATUS</p>
//         </div>
      
//         <div className='companyDiv2'>
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : orders.length === 0 ? (
//             <p>No orders available</p>
//           ) : (
//             orders.map(order => (
//               <section className='orderItems' key={order._id}>
//                 <img src={order.shop?.profileImage} alt="" className='commmImage'/>
//                 <p>{order.shop?.businessName}</p>
//                 <p>{order.phoneNumber}</p>
//                 <p>{order.date}</p>
//                 <p>{order.status}</p>
//                 <p><RiDeleteBin6Line style={{ width: "30px", height: "20px" }} /></p>
//               </section>
//             ))
//           )}
//         </div>
//       </article>
//     </div>
//   );
// };

// export default DashBoard;





// import React, { useEffect, useState } from 'react';
// import "./DashBoad.css";
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import axios from 'axios';

// const DashBoard = () => {
//   const [orders, setOrders] = useState([]);
//   const [totalOrdersCount, setTotalOrdersCount] = useState(0); // State to store total orders count
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       setIsLoading(true);
//       try {
//         const token = localStorage.getItem("userToken");
//         const response = await axios.get("https://swift-laundry.vercel.app/get-all-orders", {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         if (response.data && response.data.data) {
//           setOrders(response.data.data);
//           setTotalOrdersCount(response.data.data.length); // Set total orders count
//         } else {
//           console.log("Response data is not in the expected format:", response.data);
//         }
//       } catch (error) {
//         console.log("Error fetching user orders:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const fetchPendingOrders = async () => {
//     setIsLoading(true);
//     try {
//       const token = localStorage.getItem("userToken");
//       const response = await axios.get("https://swift-laundry.vercel.app/get-All-Pending-Orders", {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       if (response.data && response.data.data) {
//         setOrders(response.data.data);
//         setTotalOrdersCount(response.data.data.length); // Set total orders count
//       } else {
//         console.log("Response data is not in the expected format:", response.data);
//       }
//     } catch (error) {
//       console.log("Error fetching pending orders:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchCompletedOrders = async () => {
//     setIsLoading(true);
//     try {
//       const token = localStorage.getItem("userToken");
//       const response = await axios.get("https://swift-laundry.vercel.app/get-All-Completed-Orders", {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       if (response.data && response.data.data) {
//         setOrders(response.data.data);
//         setTotalOrdersCount(response.data.data.length); // Set total orders count
//       } else {
//         console.log("Response data is not in the expected format:", response.data);
//       }
//     } catch (error) {
//       console.log("Error fetching completed orders:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className='mainDashboardDivs'>
//       <article className='taskNumberDiv'>
//         <section className='cardNumbers1'>
//           <p>TOTAL ORDERS</p>
//           <h1>{totalOrdersCount}</h1>
//         </section>
//         <section className='cardNumbers2' onClick={fetchPendingOrders}>
//           <p>PENDING ORDERS</p>
//           <h1>{totalOrdersCount}</h1>
//         </section>
//         <section className='cardNumbers3' onClick={fetchCompletedOrders}>
//           <p>COMPLETED ORDERS</p>
//           <h1>{totalOrdersCount}</h1>
//         </section>
//       </article>

//       <article className='itemOrderDiv'>
//         <div className='companyDiv'>
//           <p>COMPANY</p>
//           <p>DATE</p>
//           <p>STATUS</p>
//         </div>
      
//         <div className='companyDiv2'>
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : orders.length === 0 ? (
//             <p>No orders available</p>
//           ) : (
//             orders.map(order => (
//               <section className='orderItems' key={order._id}>
//                 <img src={order.shop?.profileImage} alt="" className='commmImage'/>
//                 <p>{order.shop?.businessName}</p>
//                 <p>{order.phoneNumber}</p>
//                 <p>{order.date}</p>
//                 <p>{order.status}</p>
//                 <p><RiDeleteBin6Line style={{ width: "30px", height: "20px" }} /></p>
//               </section>
//             ))
//           )}
//         </div>
//       </article>
//     </div>
//   );
// };

// export default DashBoard;






// import React, { useEffect, useState } from 'react';
// import "./DashBoad.css";
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import axios from 'axios';

// const DashBoard = () => {
//   const [orders, setOrders] = useState([]);
//   const [filterType, setFilterType] = useState('total');
//   const [isLoading, setIsLoading] = useState(false);
//   const [totalOrdersCount, setTotalOrdersCount] = useState(0); // State to store total orders count
//   const [completedOrdersCount, setCompletedOrdersCount] = useState(0); // State to store completed orders count
//   const [pendingOrdersCount, setPendingOrdersCount] = useState(0); // State to store pending orders count

//   useEffect(() => {
//     const fetchOrders = async () => {
//       setIsLoading(true);
//       try {
//         const token = localStorage.getItem("userToken");

//         // Fetch total orders count
//         const totalOrdersResponse = await axios.get("https://swift-laundry.vercel.app/get-all-orders", {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         setTotalOrdersCount(totalOrdersResponse.data?.data?.length || 0);

//         // Fetch completed orders count
//         const completedOrdersResponse = await axios.get("https://swift-laundry.vercel.app/get-All-Completed-Orders", {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         setCompletedOrdersCount(completedOrdersResponse.data?.data?.length || 0);

//         // Fetch pending orders count
//         const pendingOrdersResponse = await axios.get("https://swift-laundry.vercel.app/get-All-Pending-Orders", {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         setPendingOrdersCount(pendingOrdersResponse.data?.data?.length || 0);
//       } catch (error) {
//         console.log("Error fetching user orders:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleFilterChange = (filter) => {
//     setFilterType(filter);
//   };

//   // Filter orders based on the selected filter type
//   const filteredOrders = orders.filter(order => {
//     if (filterType === 'total') {
//       return true;
//     } else if (filterType === 'pending') {
//       return order.status === 'pending';
//     } else if (filterType === 'completed') {
//       return order.status === 'completed';
//     }
//     return false;
//   });
//   console.log(filteredOrders?.data?.data);


//   return (
//     <div className='mainDashboardDivs'>
//       <article className='taskNumberDiv'>
//         <section className='cardNumbers1' onClick={() => handleFilterChange('total')}>
//           <p>TOTAL ORDERS</p>
//           <h1>{totalOrdersCount}</h1>
//         </section>

//         <section className='cardNumbers2' onClick={() => handleFilterChange('pending')}>
//           <p>PENDING ORDERS</p>
//           <h1>{pendingOrdersCount}</h1>
//         </section>

//         <section className='cardNumbers3' onClick={() => handleFilterChange('completed')}>
//           <p>COMPLETED ORDERS</p>
//           <h1>{completedOrdersCount}</h1>
//         </section>
//       </article>

//       <article className='itemOrderDiv'>
//         <div className='companyDiv'>
//           <p>COMPANY</p>
//           <p>DATE</p>
//           <p>STATUS</p>
//         </div>

      
//         <div className='companyDiv2'>
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : (
//             filteredOrders.length === 0 ? (
//               <p>No order completed yet</p>
//             ) : (
//               filteredOrders.map(order => (
//                 <section className='orderItems' key={order._id}>
//                   <img src={order.shop?.profileImage} alt="" className='commmImage'/>
//                   <p>{order.shop?.businessName}</p>
//                   <p>{order.phoneNumber}</p>
//                   <p>{order.date}</p>
//                   <p>{order.status}</p>
//                   <p><RiDeleteBin6Line style={{ width: "30px", height: "20px" }} /></p>
//                 </section>
//               ))
//             )
//           )}
//         </div>
//       </article>
//     </div>
//   );
// };

// export default DashBoard;





// import React, { useEffect, useState } from 'react';
// import "./DashBoad.css";
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import axios from 'axios';

// const DashBoard = () => {
//   const [orders, setOrders] = useState([]);
//   const [totalOrdersCount, setTotalOrdersCount] = useState(0); // State to store total orders count
//   const [isLoading, setIsLoading] = useState(false);
//   const [pendingOrdersCount, setPendingOrdersCount] = useState(0); // State to store pending orders count
//   const [completedOrdersCount, setCompletedOrdersCount] = useState(0); // State to store completed orders count

//   useEffect(() => {
//     const fetchOrders = async () => {
//       setIsLoading(true);
//       try {
//         const token = localStorage.getItem("userToken");
//         const response = await axios.get("https://swift-laundry.vercel.app/get-all-orders", {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         if (response.data && response.data.data) {
//           const allOrders = response.data.data;
//           setOrders(allOrders);
//           setTotalOrdersCount(allOrders.length);
//           // Calculate pending and completed orders count
//           const pendingOrders = allOrders.filter(order => order.status === 'pending');
//           setPendingOrdersCount(pendingOrders.length);
//           const completedOrders = allOrders.filter(order => order.status === 'completed');
//           setCompletedOrdersCount(completedOrders.length);
//         } else {
//           console.log("Response data is not in the expected format:", response.data);
//         }
//       } catch (error) {
//         console.log("Error fetching user orders:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const fetchPendingOrders = async () => {
//     setIsLoading(true);
//     try {
//       const token = localStorage.getItem("userToken");
//       const response = await axios.get("https://swift-laundry.vercel.app/get-All-Pending-Orders", {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       if (response.data && response.data.data) {
//         setOrders(response.data.data);
//         setTotalOrdersCount(response.data.data.length);
//         setPendingOrdersCount(response.data.data.length); // Set pending orders count
//       } else {
//         console.log("Response data is not in the expected format:", response.data);
//       }
//     } catch (error) {
//       console.log("Error fetching pending orders:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchCompletedOrders = async () => {
//     setIsLoading(true);
//     try {
//       const token = localStorage.getItem("userToken");
//       const response = await axios.get("https://swift-laundry.vercel.app/get-All-Completed-Orders", {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       if (response.data && response.data.data) {
//         setOrders(response.data.data);
//         setTotalOrdersCount(response.data.data.length);
//         setCompletedOrdersCount(response.data.data.length); // Set completed orders count
//       } else {
//         console.log("Response data is not in the expected format:", response.data);
//       }
//     } catch (error) {
//       console.log("Error fetching completed orders:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className='mainDashboardDivs'>
//       <article className='taskNumberDiv'>
//         <section className='cardNumbers1'>
//           <p>TOTAL ORDERS</p>
//           <h1>{totalOrdersCount}</h1>
//         </section>
//         <section className='cardNumbers2' onClick={fetchPendingOrders}>
//           <p>PENDING ORDERS</p>
//           <h1>{pendingOrdersCount}</h1>
//         </section>
//         <section className='cardNumbers3' onClick={fetchCompletedOrders}>
//           <p>COMPLETED ORDERS</p>
//           <h1>{completedOrdersCount}</h1>
//         </section>
//       </article>

//       <article className='itemOrderDiv'>
//         <div className='companyDiv'>
//           <p>COMPANY</p>
//           <p>DATE</p>
//           <p>STATUS</p>
//         </div>
      
//         <div className='companyDiv2'>
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : orders.length === 0 ? (
//             <p>No orders available</p>
//           ) : (
//             orders.map(order => (
//               <section className='orderItems' key={order._id}>
//                 <img src={order.shop?.profileImage} alt="" className='commmImage'/>
//                 <p>{order.shop?.businessName}</p>
//                 <p>{order.phoneNumber}</p>
//                 <p>{order.date}</p>
//                 <p>{order.status}</p>
//                 <p><RiDeleteBin6Line style={{ width: "30px", height: "20px" }} /></p>
//               </section>
//             ))
//           )}
//         </div>
//       </article>
//     </div>
//   );
// };

// export default DashBoard;


// import React, { useEffect, useState } from 'react';
// import "./DashBoad.css";
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import axios from 'axios';

// const DashBoard = () => {
//   const [orders, setOrders] = useState([]);
//   const [totalOrdersCount, setTotalOrdersCount] = useState(0); // State to store total orders count
//   const [isLoading, setIsLoading] = useState(false);
//   const [pendingOrdersCount, setPendingOrdersCount] = useState(0); // State to store pending orders count
//   const [completedOrdersCount, setCompletedOrdersCount] = useState(0); // State to store completed orders count
//   const [clickedCard, setClickedCard] = useState('total'); // State to store which card is clicked

//   useEffect(() => {
//     const fetchOrders = async () => {
//       setIsLoading(true);
//       try {
//         const token = localStorage.getItem("userToken");
//         const response = await axios.get("https://swift-laundry.vercel.app/get-all-orders", {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         if (response.data && response.data.data) {
//           const allOrders = response.data.data;
//           setOrders(allOrders);
//           setTotalOrdersCount(allOrders.length);
//           // Calculate pending and completed orders count
//           const pendingOrders = allOrders.filter(order => order.status === 'pending');
//           setPendingOrdersCount(pendingOrders.length);
//           const completedOrders = allOrders.filter(order => order.status === 'completed');
//           setCompletedOrdersCount(completedOrders.length);
//         } else {
//           console.log("Response data is not in the expected format:", response.data);
//         }
//       } catch (error) {
//         console.log("Error fetching user orders:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const fetchPendingOrders = async () => {
//     setIsLoading(true);
//     try {
//       const token = localStorage.getItem("userToken");
//       const response = await axios.get("https://swift-laundry.vercel.app/get-All-Pending-Orders", {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       if (response.data && response.data.data) {
//         setOrders(response.data.data);
//         setTotalOrdersCount(response.data.data.length);
//         setPendingOrdersCount(response.data.data.length); // Set pending orders count
//         setClickedCard('pending');
//       } else {
//         console.log("Response data is not in the expected format:", response.data);
//       }
//     } catch (error) {
//       console.log("Error fetching pending orders:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchCompletedOrders = async () => {
//     setIsLoading(true);
//     try {
//       const token = localStorage.getItem("userToken");
//       const response = await axios.get("https://swift-laundry.vercel.app/get-All-Completed-Orders", {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       if (response.data && response.data.data) {
//         setOrders(response.data.data);
//         setTotalOrdersCount(response.data.data.length);
//         setCompletedOrdersCount(response.data.data.length); // Set completed orders count
//         setClickedCard('completed');
//       } else {
//         console.log("Response data is not in the expected format:", response.data);
//       }
//     } catch (error) {
//       console.log("Error fetching completed orders:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className='mainDashboardDivs'>
//       <article className='taskNumberDiv'>
//         <section className='cardNumbers1'>
//           <p>TOTAL ORDERS</p>
//           <h1>{totalOrdersCount}</h1>
//         </section>
//         <section className='cardNumbers2' onClick={fetchPendingOrders}>
//           <p>PENDING ORDERS</p>
//           <h1>{pendingOrdersCount}</h1>
//         </section>
//         <section className='cardNumbers3' onClick={fetchCompletedOrders}>
//           <p>COMPLETED ORDERS</p>
//           <h1>{completedOrdersCount}</h1>
//         </section>
//       </article>

//       <article className='itemOrderDiv'>
//         <div className='companyDiv'>
//           <p>COMPANY</p>
//           <p>DATE</p>
//           <p>STATUS</p>
//         </div>
      
//         <div className='companyDiv2'>
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : orders.length === 0 ? (
//             <p>No orders available</p>
//           ) : (
//             orders.map(order => (
//               // Display orders based on the clicked card
//               (clickedCard === 'total' || clickedCard === order.status) && (
//                 <section className='orderItems' key={order._id}>
//                   <img src={order.shop?.profileImage} alt="" className='commmImage'/>
//                   <p>{order.shop?.businessName}</p>
//                   <p>{order.phoneNumber}</p>
//                   <p>{order.date}</p>
//                   <p>{order.status}</p>
//                   <p><RiDeleteBin6Line style={{ width: "30px", height: "20px" }} /></p>
//                 </section>
//               )
//             ))
//           )}
//         </div>
//       </article>
//     </div>
//   );
// };

// export default DashBoard;









import React, { useEffect, useState } from 'react';
import "./DashBoad.css";
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';

const DashBoard = () => {
  const [orders, setOrders] = useState([]);
  const [totalOrdersCount, setTotalOrdersCount] = useState(0); // State to store total orders count
  const [isLoading, setIsLoading] = useState(false);
  const [pendingOrdersCount, setPendingOrdersCount] = useState(0); // State to store pending orders count
  const [completedOrdersCount, setCompletedOrdersCount] = useState(0); // State to store completed orders count
  const [clickedCard, setClickedCard] = useState('total'); // State to store which card is clicked

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.get("https://swift-laundry.vercel.app/get-all-orders", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.data && response.data.data) {
          const allOrders = response.data.data;
          setOrders(allOrders);
          setTotalOrdersCount(allOrders.length);
          // Calculate pending and completed orders count
          const pendingOrders = allOrders.filter(order => order.status === 'pending');
          setPendingOrdersCount(pendingOrders.length);
          const completedOrders = allOrders.filter(order => order.status === 'completed');
          setCompletedOrdersCount(completedOrders.length);
        } else {
          console.log("Response data is not in the expected format:", response.data);
        }
      } catch (error) {
        console.log("Error fetching user orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const fetchPendingOrders = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.get("https://swift-laundry.vercel.app/get-All-Pending-Orders", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data && response.data.data) {
        const pendingOrders = response.data.data;
        setOrders(pendingOrders);
        setTotalOrdersCount(pendingOrders.length);
        setPendingOrdersCount(pendingOrders.length); // Set pending orders count
        setClickedCard('pending');
      } else {
        console.log("Response data is not in the expected format:", response.data);
      }
    } catch (error) {
      console.log("Error fetching pending orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCompletedOrders = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.get("https://swift-laundry.vercel.app/get-All-Completed-Orders", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data && response.data.data) {
        const completedOrders = response.data.data;
        setOrders(completedOrders);
        setTotalOrdersCount(completedOrders.length);
        setCompletedOrdersCount(completedOrders.length); // Set completed orders count
        setClickedCard('completed');
      } else {
        console.log("Response data is not in the expected format:", response.data);
      }
    } catch (error) {
      console.log("Error fetching completed orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='mainDashboardDivs'>
      <article className='taskNumberDiv'>
        <section className='cardNumbers1'>
          <p>TOTAL ORDERS</p>
          <h1>{totalOrdersCount}</h1>
        </section>
        <section className='cardNumbers2' onClick={fetchPendingOrders}>
          <p>PENDING ORDERS</p>
          <h1>{pendingOrdersCount}</h1>
        </section>
        <section className='cardNumbers3' onClick={fetchCompletedOrders}>
          <p>COMPLETED ORDERS</p>
          <h1>{completedOrdersCount}</h1>
        </section>
      </article>

      <article className='itemOrderDiv'>
        <div className='companyDiv'>
          <p>COMPANY</p>
          <p>DATE</p>
          <p>STATUS</p>
        </div>
      
        <div className='companyDiv2'>
          {isLoading ? (
            <p>Loading...</p>
          ) : orders.length === 0 ? (
            <p>No orders available</p>
          ) : (
            orders.map(order => (
              // Display orders based on the clicked card
              (clickedCard === 'total' || clickedCard === order.status) && (
                <section className='orderItems' key={order._id}>
                  <img src={order.shop?.profileImage} alt="" className='commmImage'/>
                  <p>{order.shop?.businessName}</p>
                  <p>{order.phoneNumber}</p>
                  <p>{order.date}</p>
                  <p>{order.status}</p>
                  <p><RiDeleteBin6Line style={{ width: "30px", height: "20px" }} /></p>
                </section>
              )
            ))
          )}
        </div>
      </article>
    </div>
  );
};

export default DashBoard;


