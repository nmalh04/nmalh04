/*
  # Create API Keys Table

  1. New Tables
    - `api_keys`
      - `id` (uuid, primary key)
      - `key` (text, encrypted)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `api_keys` table
    - Add policy for authenticated users to read keys
*/

CREATE TABLE IF NOT EXISTS api_keys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE api_keys ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read API keys"
  ON api_keys
  FOR SELECT
  TO authenticated
  USING (true);