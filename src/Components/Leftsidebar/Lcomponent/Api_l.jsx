import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Api_l.css';

// Import icons
import { FaInfoCircle, FaMemory, FaUsers, FaBuilding, FaLink } from 'react-icons/fa';
import { MdDashboard, MdExpandLess, MdExpandMore } from 'react-icons/md';

function Api_l() {
  const location = useLocation();
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // API endpoints data structure
  const apiCategories = [
    {
      id: 'memory',
      title: 'Memory APIs',
      icon: <FaMemory />,
      endpoints: [
        { id: 'add-memories', method: 'POST', path: '/api-reference/memory/add-memories', name: 'Add Memories' },
        { id: 'search-memories-v2', method: 'POST', path: '/api-reference/memory/search-memories-v2', name: 'Search Memories (v2)' },
        { id: 'search-memories-v1', method: 'POST', path: '/api-reference/memory/search-memories-v1', name: 'Search Memories (v1 - Deprecated)' },
        { id: 'get-memories-v2', method: 'POST', path: '/api-reference/memory/get-memories-v2', name: 'Get Memories (v2)' },
        { id: 'get-memories-v1', method: 'GET', path: '/api-reference/memory/get-memories-v1', name: 'Get Memories (v1 - Deprecated)' },
        { id: 'memory-history', method: 'GET', path: '/api-reference/memory/memory-history', name: 'Memory History' },
        { id: 'get-memory', method: 'GET', path: '/api-reference/memory/get-memory', name: 'Get Memory' },
        { id: 'update-memory', method: 'PUT', path: '/api-reference/memory/update-memory', name: 'Update Memory' },
        { id: 'batch-update-memory', method: 'PUT', path: '/api-reference/memory/batch-update-memory', name: 'Batch Update Memory' },
        { id: 'delete-memory', method: 'DEL', path: '/api-reference/memory/delete-memory', name: 'Delete Memory' },
        { id: 'batch-delete-memories',method: 'DEL', path: '/api-reference/memory/batch-delete-memories', name: 'Batch Delete Memories' },
        { id: 'delete-memories',method: 'DEL', path: '/api-reference/memory/delete-memories', name: 'Delete Memories' },
        { id: 'create-memory-export',method: 'POST', path: '/api-reference/memory/create-memory-export', name: 'Create Memory Export' },
        { id: 'get-memory-export',method: 'GET', path: '/api-reference/memory/get-memory-export', name: 'Get Memory Export' },
      ]
    },
    {
      id: 'entities',
      title: 'Entities APIs',
      icon: <FaUsers />,
      endpoints: [
        { id: 'get-users', method: 'GET', path: '/api-reference/entities/get-users', name: 'Get Users' },
        { id: 'del-users', method: 'DEL', path: '/api-reference/entities/delete-users', name: 'Delete Users' },
        ]
    },
    {
      id: 'organizations',
      title: 'Organizations APIs',
      icon: <FaBuilding />,
      endpoints: [
        { id: 'create-org', method: 'POST', path: '/api-reference/organizations/create-org', name: 'Create Organization' },
        { id: 'get-org', method: 'GET', path: '/api-reference/organizations/get-org', name: 'Get Organization' },
        { id: 'update-org', method: 'PUT', path: '/api-reference/organizations/update-org', name: 'Update Organization' },
        { id: 'get-members', method: 'GET', path: '/api-reference/organizations/get-members', name: 'Get Members' },
        { id: 'add-member', method: 'POST', path: '/api-reference/organizations/add-members', name: 'Add Member' },
        { id: 'del-org', method: 'DEL', path: '/api-reference/organizations/delete-org', name: 'Delete Organization' },
      ]
    },
    {
      id: 'webhooks',
      title: 'Webhook APIs',
      icon: <FaLink />,
      endpoints: [
        { id: 'create-webhook', method: 'POST', path: '/api-reference/webhook-apis/create-webhook', name: 'Create Webhook' },
        { id: 'get-webhook', method: 'GET', path: '/api-reference/webhook-apis/get-webhook', name: 'Get Webhook' },
        { id: 'update-webhook', method: 'PUT', path: '/api-reference/webhook-apis/update-webhook', name: 'Update Webhook' },
        { id: 'del-webhook', method: 'DEL', path: '/api-reference/webhook-apis/delete-webhook', name: 'Delete Webhook' },
      ]
    }
  ];

  const isEndpointActive = (path) => {
    return location.pathname === path;
  };

  const isOverviewActive = () => {
    return location.pathname === '/api-reference/overview';
  };

  return (
    <div className="api-ref-leftbar-api-sidebar">
      <h3 className="api-ref-leftbar-api-title">API Reference</h3>
      
      {/* Overview link */}
      <Link to="/api-reference/overview" className={`api-ref-leftbar-api-overview ${isOverviewActive() ? 'active' : ''}`}>
        <span className="api-ref-leftbar-overview-icon"><MdDashboard/></span>
        <span className="api-ref-leftbar-overview-title">Overview</span>
      </Link>
      
      {/* API Categories */}
      <div className="api-ref-leftbar-api-section">
        {apiCategories.map(category => (
          <div key={category.id} className={`api-ref-leftbar-api-category ${openCategories[category.id] ? 'active' : ''}`}>
            <div 
              className="api-ref-leftbar-api-category-header" 
              onClick={() => toggleCategory(category.id)}
            >
              <span className="api-ref-leftbar-api-category-icon">{category.icon}</span>
              <span className="api-ref-leftbar-api-category-title">{category.title}</span>
              <span className="api-ref-leftbar-api-category-expand">
                {openCategories[category.id] ? <MdExpandLess /> : <MdExpandMore />}
              </span>
            </div>
            
            {openCategories[category.id] && (
              <div className="api-ref-leftbar-api-endpoints">
                {category.endpoints.map(endpoint => (
                  <Link 
                    key={endpoint.id} 
                    to={endpoint.path} 
                    className={`api-ref-leftbar-api-endpoint ${isEndpointActive(endpoint.path) ? 'active' : ''}`}
                  >
                    <span className={`api-ref-leftbar-endpoint-method method-${endpoint.method.toLowerCase()}`}>
                      {endpoint.method}
                    </span>
                    <span>{endpoint.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api_l;