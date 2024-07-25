import React from 'react';
import UserSelectedclasses from '../Hooks/UserSelectedclasses';
import Swal from 'sweetalert2';

const MyClasses = () => {

    const [selectedClass, refetch] = UserSelectedclasses();
    console.log(selectedClass);
    
    const totalPrice = selectedClass.reduce((sum, item) => {
      const price = parseFloat(item.price);
      if (!isNaN(price)) {
        return sum + price;
      }
      return sum;
    }, 0);


    const handleClassDelete = (myclass) => {
      Swal.fire({
        title: "Are you sure?",
        text: `Delete ${myclass.classname}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://assignment-12-server-sepia.vercel.app/selectedclasses/${myclass._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                refetch();
                Swal.fire(
                  "Deleted!",
                  "Your selected class has been deleted.",
                  "success"
                );
              }
            });
        }
      });
    };

    return (
      <div className="overflow-x-auto mt-10">
        <table className="table w-full md:w-[800px] lg:w-full mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-white text-base">Class Name</th>
              <th className="text-white text-base">Available seats</th>
              <th className="text-white text-base">Price</th>
              <th className="text-white text-base">Options</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((myclass, index) => (
              <tr key={myclass._id}>
                <td className="md:table-cell">
                  <p className="font-semibold">{index + 1}</p>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className=" rounded-md w-12 h-12">
                        <img src={myclass.image} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{myclass.classname}</div>
                    </div>
                  </div>
                </td>
                <td className="md:table-cell">
                  {myclass.availableSeats} Seats Available
                </td>
                <td className="md:table-cell"> $ {myclass.price}</td>
                <td className="md:table-cell">
                  <button
                    onClick={() => {
                      handleClassDelete(myclass);
                    }}
                    className="btn btn2 btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="md:table-cell"></th>
              <th className="md:table-cell text-white text-2xl">
                Selected Class : {selectedClass.length}
              </th>
              <th className="md:table-cell"></th>
              <th className="md:table-cell text-white text-2xl">
                Total Price : $ {totalPrice}
              </th>
              <th className="md:table-cell">
                <button className="btn btn1 btn-error btn-md">Pay</button>
              </th>
              <th className="md:table-cell"></th>
              <th className="md:table-cell"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
};

export default MyClasses;
