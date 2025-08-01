import React, { useState } from 'react';
import { Search, Calendar } from 'lucide-react';
import CallItem from '../components/CallManagement/CallItem';
import CallDetails from '../components/CallManagement/CallDetails';
import { calls, statusOptions, intentOptions, sentimentOptions } from '../components/CallManagement/callManagementData';
import styles from '../components/CallManagement/CallManagement.module.css';

export default function CallManagement() {
  const [selectedCall, setSelectedCall] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterIntent, setFilterIntent] = useState('all');
  const [filterSentiment, setFilterSentiment] = useState('all');
  const [filterDate, setFilterDate] = useState('');

  const filteredCalls = calls.filter(call => {
    const matchesSearch = call.caller.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         call.agent.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         call.intent.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || call.status === filterStatus;
    const matchesIntent = filterIntent === 'all' || call.intent === filterIntent;
    const matchesSentiment = filterSentiment === 'all' || call.sentiment === filterSentiment;
    const matchesDate = !filterDate || call.date === filterDate;
    
    return matchesSearch && matchesStatus && matchesIntent && matchesSentiment && matchesDate;
  });

  return (
    <div className={styles.callManagement}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Gestión de Llamadas</h1>
          <p className={styles.subtitle}>Monitoreo, análisis y gestión de todas las llamadas</p>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filtersCard}>
        <div className={styles.filtersContainer}>
          <div className={styles.filtersRow}>
            {/* Search */}
            <div className={styles.searchContainer}>
              <Search className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Buscar por teléfono, agente o intención..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={styles.filterSelect}
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>

            {/* Intent Filter */}
            <select
              value={filterIntent}
              onChange={(e) => setFilterIntent(e.target.value)}
              className={styles.filterSelect}
            >
              {intentOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          
          <div className={styles.filtersRow}>
            {/* Sentiment Filter */}
            <select
              value={filterSentiment}
              onChange={(e) => setFilterSentiment(e.target.value)}
              className={styles.filterSelect}
            >
              {sentimentOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>

            {/* Date Filter */}
            <div className={styles.dateContainer}>
              <Calendar className={styles.dateIcon} />
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className={styles.dateInput}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.contentGrid}>
        {/* Calls List */}
        <div className={styles.callsListCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Lista de Llamadas</h3>
            <p className={styles.cardSubtitle}>{filteredCalls.length} llamadas encontradas</p>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.callsList}>
              {filteredCalls.map((call) => (
                <CallItem
                  key={call.id}
                  call={call}
                  isSelected={selectedCall?.id === call.id}
                  onClick={setSelectedCall}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call Details */}
        <div className={styles.callDetailsCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Detalles de la Llamada</h3>
            {selectedCall && (
              <p className={styles.cardSubtitle}>ID: {selectedCall.id} - {selectedCall.date} {selectedCall.time}</p>
            )}
          </div>
          <div className={styles.callDetailsContent}>
            <CallDetails call={selectedCall} />
          </div>
        </div>
      </div>
    </div>
  );
}