import React from 'react';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-droder" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">



            </div>
            <div class="drawer-side">
                <label for="dashboard-droder" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;