import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Phone } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const OrderConfirmation: React.FC = () => {
  const { state } = useApp();
  const location = useLocation();
  const { orderId } = location.state || {};

  const order = state.orders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h2>
          <Link to="/" className="text-orange-500 hover:text-orange-600 font-medium">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-100';
      case 'preparing':
        return 'text-yellow-600 bg-yellow-100';
      case 'ready':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-lg text-gray-600">
            Thank you for your order. We'll have it ready soon!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Order Header */}
          <div className="bg-orange-50 px-6 py-4 border-b border-orange-100">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Order #{order.id}
                </h2>
                <p className="text-sm text-gray-600">
                  Placed on {order.orderDate.toLocaleDateString()} at {order.orderDate.toLocaleTimeString()}
                </p>
              </div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
          </div>

          <div className="p-6">
            {/* Order Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-orange-500" />
                  Timing Information
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Order Type: <span className="font-medium capitalize">{order.orderType}</span></p>
                  {order.estimatedDeliveryTime && (
                    <p>
                      Estimated {order.orderType === 'delivery' ? 'Delivery' : 'Ready'} Time:{' '}
                      <span className="font-medium">
                        {order.estimatedDeliveryTime.toLocaleTimeString()}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-orange-500" />
                  Contact Information
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>{order.customerInfo.name}</p>
                  <p>{order.customerInfo.email}</p>
                  <p>{order.customerInfo.phone}</p>
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            {order.orderType === 'delivery' && order.customerInfo.address && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                  Delivery Address
                </h3>
                <div className="text-sm text-gray-600">
                  <p>{order.customerInfo.address.street}</p>
                  <p>
                    {order.customerInfo.address.city}, {order.customerInfo.address.state}{' '}
                    {order.customerInfo.address.zipCode}
                  </p>
                </div>
              </div>
            )}

            {/* Order Items */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Order Items</h3>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.menuItem.image}
                        alt={item.menuItem.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{item.menuItem.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        {item.specialInstructions && (
                          <p className="text-sm text-orange-600">
                            Special: {item.specialInstructions}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="font-medium text-gray-900">
                      ${(item.menuItem.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Payment Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method</span>
                  <span className="font-medium capitalize">{order.paymentMethod.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-200">
                  <span>Total Paid</span>
                  <span className="text-orange-500">${order.totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link
            to="/menu"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
          >
            Order Again
          </Link>
          <Link
            to="/"
            className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center"
          >
            Return Home
          </Link>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">What's Next?</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• You'll receive a confirmation email shortly</li>
            <li>• Our kitchen team is preparing your order</li>
            <li>• {order.orderType === 'delivery' ? 'Our driver will contact you when on the way' : 'We\'ll notify you when your order is ready for pickup'}</li>
            <li>• Contact us at (555) 123-4567 if you have any questions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;