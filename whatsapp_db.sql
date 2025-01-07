-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-01-2025 a las 00:06:38
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `whatsapp_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_whatsapp`
--

CREATE TABLE `clientes_whatsapp` (
  `id_cliente_whatsapp` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `estado` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `usuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `clientes_whatsapp`
--

INSERT INTO `clientes_whatsapp` (`id_cliente_whatsapp`, `nombre`, `estado`, `fecha`, `usuario`) VALUES
('0001', 'Cliente 1', 1, '2024-12-27 20:15:00', 'admin'),
('0002', 'Cliente 1', 1, '2024-12-27 20:16:50', 'admin'),
('0003', 'Cliente 1', 1, '2024-12-27 20:17:34', 'admin'),
('0004', 'Cliente 2', 1, '2024-12-27 22:00:31', 'admin'),
('0005', 'Cliente 1', 1, '2024-12-29 23:19:59', 'admin'),
('0006', 'Cliente 1', 1, '2024-12-30 12:14:25', 'admin'),
('0007', 'Cliente 1', 1, '2025-01-03 21:04:05', 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conexiones_nodos_flujos`
--

CREATE TABLE `conexiones_nodos_flujos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `configuracion_api`
--

CREATE TABLE `configuracion_api` (
  `id_configuracion` bigint(20) UNSIGNED NOT NULL,
  `token_api` longtext NOT NULL,
  `numero_verificacion` varchar(255) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `usuario` varchar(255) NOT NULL,
  `estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `configuracion_api`
--

INSERT INTO `configuracion_api` (`id_configuracion`, `token_api`, `numero_verificacion`, `fecha`, `usuario`, `estado`) VALUES
(1, 'Prueba', '123456789', '2025-01-02 07:15:51', 'JLOZANO', 1),
(2, '$2y$12$oHm7L2sVgavoqKRsmZAx8OWW21e7FlwEz1OaEihRZO.A/duaqk6sm', '12', '2025-01-02 12:59:23', 'admin', 1),
(3, '$2y$12$fW6gm4SeY5H2sUAYaXEa8O9Wcn3IM1VOmawYqVFJz95A8P3rwf8Hq', '1', '2025-01-02 12:59:57', 'admin', 1),
(4, '$2y$12$wqdGWtVXV78Qdq0zU0/ii.LKWEwOzEsixE8t.cLT.ibSABUI3OtDO', '13', '2025-01-02 13:02:47', 'admin', 1),
(5, '$2y$12$afjJBAXqFgcKKuMsOGe.se2iR3b6KE5NJhTr1RoMgEjke6LoO4M1i', '134', '2025-01-02 13:02:53', 'admin', 1),
(6, '$2y$12$unRCWdiWUA71iLYHvuww8O4n4gkkwrO8J1VPu4zQsV3Qf0Ir2ucva', '12', '2025-01-02 13:06:50', 'admin', 1),
(7, '$2y$12$L/yoABXiq3NUUvt1fUvbsOk7mUPb0Qd5eueEmLvxZGULMgGF.zj46', '12', '2025-01-02 13:08:31', 'admin', 1),
(8, '$2y$12$3DzI7DQJ9N3hUbQuCrBglec1gqjlCIpeJc2bnjKmOHI7CqB.7wF7m', '123456', '2025-01-02 13:39:36', 'admin', 1),
(9, '$2y$12$nvQswyx3kg3ZBw9TDKDVtum4PiknUjk7kON68OoW.jSW0uKIvz22i', '3214833242', '2025-01-03 21:07:33', 'admin', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flujos_ip6`
--

CREATE TABLE `flujos_ip6` (
  `id_flujo_ip6` bigint(20) UNSIGNED NOT NULL,
  `nombre_flujo` varchar(255) NOT NULL,
  `id_cliente` varchar(255) NOT NULL,
  `nombre_cliente` varchar(255) NOT NULL,
  `estado` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `usuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flujos_procesos_ip6`
--

CREATE TABLE `flujos_procesos_ip6` (
  `id_flujo_proceso_ip6` bigint(20) UNSIGNED NOT NULL,
  `nombre_proceso` varchar(255) NOT NULL,
  `codigo_proceso_ip6` varchar(255) NOT NULL,
  `estado` int(11) NOT NULL,
  `id_flujo_ip6` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historico_flujos_ip6`
--

CREATE TABLE `historico_flujos_ip6` (
  `id_historico_flujos` bigint(20) UNSIGNED NOT NULL,
  `nombre_flujo` varchar(255) NOT NULL,
  `id_cliente` varchar(255) NOT NULL,
  `nombre_cliente` varchar(255) NOT NULL,
  `estado` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `usuario` varchar(255) NOT NULL,
  `id_flujo_ip6` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historico_flujos_procesos_ip6`
--

CREATE TABLE `historico_flujos_procesos_ip6` (
  `id_historico_flujo_proceso_ip6` bigint(20) UNSIGNED NOT NULL,
  `id_flujo_proceso_ip6` varchar(255) NOT NULL,
  `nombre_proceso` varchar(255) NOT NULL,
  `codigo_proceso_ip6` varchar(255) NOT NULL,
  `id_flujo_ip6` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes_whatsapp`
--

CREATE TABLE `mensajes_whatsapp` (
  `id_mensaje_whatsapp` bigint(20) UNSIGNED NOT NULL,
  `titulo` longtext NOT NULL,
  `descripcion` longtext NOT NULL,
  `check_url` int(11) DEFAULT NULL,
  `id_url` int(11) NOT NULL,
  `estado_flujo_activacion` int(11) DEFAULT NULL,
  `id_cliente_whatsapp` varchar(255) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `usuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `mensajes_whatsapp`
--

INSERT INTO `mensajes_whatsapp` (`id_mensaje_whatsapp`, `titulo`, `descripcion`, `check_url`, `id_url`, `estado_flujo_activacion`, `id_cliente_whatsapp`, `fecha`, `usuario`) VALUES
(1, 'Nuevo Mensaje', 'Descripción del mensaje', 1, 123, 0, '0035', '2024-12-30 13:36:03', 'admin'),
(2, 'Prueba-4', 'Prueba', 0, 0, 0, '0001', '2024-12-30 21:00:32', 'admin'),
(3, 'Prueba', 'Prueba', 1, 123, 0, '0001', '2024-12-30 14:47:50', 'admin'),
(4, 'Prueba', 'Prueba', 1, 123, 0, '0001', '2024-12-30 14:59:52', 'admin'),
(5, 'Prueba 0002', 'Prueba 0002', 1, 123, 0, '0002', '2024-12-30 15:07:55', 'admin'),
(6, 'Nuevo Mensaje', 'Descripción del mensaje', 1, 123, 0, '0035', '2025-01-02 12:57:34', 'admin'),
(7, 'Hola Esto es una prueba', 'Esto es la descripcion de la prueba', 1, 1, 1, '0007', '2025-01-03 21:05:32', 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_12_12_194031_whatsapp_data', 1),
(5, '2024_12_27_170146_mensajes_whatsapp', 2),
(6, '2024_12_27_180347_clientes_whatsapp', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantillas_mensajes_cab`
--

CREATE TABLE `plantillas_mensajes_cab` (
  `id_plantilla_cab` bigint(20) UNSIGNED NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `mensaje` varchar(255) NOT NULL,
  `check_url` int(11) NOT NULL,
  `url` longtext NOT NULL,
  `variable_url` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantillas_mensajes_lin`
--

CREATE TABLE `plantillas_mensajes_lin` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('mSc4QxUZg0yPW5D7yU9faRpAbqL2F1roDKPF4Urj', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWGtjbmpmZnZLenEwV1luREIyYkMwbVBqRzJINUlUQ29PaFljWDdWTCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1735327762);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `clientes_whatsapp`
--
ALTER TABLE `clientes_whatsapp`
  ADD PRIMARY KEY (`id_cliente_whatsapp`);

--
-- Indices de la tabla `conexiones_nodos_flujos`
--
ALTER TABLE `conexiones_nodos_flujos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `conexiones_nodos_flujos_uuid_unique` (`uuid`);

--
-- Indices de la tabla `configuracion_api`
--
ALTER TABLE `configuracion_api`
  ADD PRIMARY KEY (`id_configuracion`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `flujos_ip6`
--
ALTER TABLE `flujos_ip6`
  ADD PRIMARY KEY (`id_flujo_ip6`);

--
-- Indices de la tabla `flujos_procesos_ip6`
--
ALTER TABLE `flujos_procesos_ip6`
  ADD PRIMARY KEY (`id_flujo_proceso_ip6`),
  ADD UNIQUE KEY `flujos_procesos_ip6_id_flujo_ip6_unique` (`id_flujo_ip6`);

--
-- Indices de la tabla `historico_flujos_ip6`
--
ALTER TABLE `historico_flujos_ip6`
  ADD PRIMARY KEY (`id_historico_flujos`),
  ADD UNIQUE KEY `historico_flujos_ip6_id_flujo_ip6_unique` (`id_flujo_ip6`);

--
-- Indices de la tabla `historico_flujos_procesos_ip6`
--
ALTER TABLE `historico_flujos_procesos_ip6`
  ADD PRIMARY KEY (`id_historico_flujo_proceso_ip6`),
  ADD UNIQUE KEY `historico_flujos_procesos_ip6_id_flujo_proceso_ip6_unique` (`id_flujo_proceso_ip6`),
  ADD UNIQUE KEY `historico_flujos_procesos_ip6_id_flujo_ip6_unique` (`id_flujo_ip6`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mensajes_whatsapp`
--
ALTER TABLE `mensajes_whatsapp`
  ADD PRIMARY KEY (`id_mensaje_whatsapp`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `plantillas_mensajes_cab`
--
ALTER TABLE `plantillas_mensajes_cab`
  ADD PRIMARY KEY (`id_plantilla_cab`);

--
-- Indices de la tabla `plantillas_mensajes_lin`
--
ALTER TABLE `plantillas_mensajes_lin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `plantillas_mensajes_lin_uuid_unique` (`uuid`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `conexiones_nodos_flujos`
--
ALTER TABLE `conexiones_nodos_flujos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `configuracion_api`
--
ALTER TABLE `configuracion_api`
  MODIFY `id_configuracion` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `flujos_ip6`
--
ALTER TABLE `flujos_ip6`
  MODIFY `id_flujo_ip6` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `flujos_procesos_ip6`
--
ALTER TABLE `flujos_procesos_ip6`
  MODIFY `id_flujo_proceso_ip6` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `historico_flujos_ip6`
--
ALTER TABLE `historico_flujos_ip6`
  MODIFY `id_historico_flujos` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `historico_flujos_procesos_ip6`
--
ALTER TABLE `historico_flujos_procesos_ip6`
  MODIFY `id_historico_flujo_proceso_ip6` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajes_whatsapp`
--
ALTER TABLE `mensajes_whatsapp`
  MODIFY `id_mensaje_whatsapp` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `plantillas_mensajes_cab`
--
ALTER TABLE `plantillas_mensajes_cab`
  MODIFY `id_plantilla_cab` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `plantillas_mensajes_lin`
--
ALTER TABLE `plantillas_mensajes_lin`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
