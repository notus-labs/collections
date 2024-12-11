export interface CollectionMetadata {
  // Identifiers
  tradeportId: string;
  structType: string;

  // Basic Information
  title: string;
  description: string;
  website?: string;

  // Metadata
  createdAt: number | Date;
  selfReportedSupply?: number;

  // Visual Assets
  backgroundUrl: string;
  iconUrl: string;
}
