import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: 'completed' | 'draft' | 'in-review' | 'approved' | 'rejected' | 'pending';
  className?: string;
}

export const StatusBadge = ({ status, className = '' }: StatusBadgeProps) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          label: 'Completed',
          className: 'bg-green-100 text-green-800 hover:bg-green-200'
        };
      case 'in-review':
        return {
          label: 'In Review',
          className: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
        };
      case 'draft':
        return {
          label: 'In Draft',
          className: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        };
      case 'approved':
        return {
          label: 'Approved',
          className: 'bg-blue-100 text-blue-800 hover:bg-blue-200'
        };
      case 'rejected':
        return {
          label: 'Rejected',
          className: 'bg-red-100 text-red-800 hover:bg-red-200'
        };
      case 'pending':
        return {
          label: 'Pending',
          className: 'bg-orange-100 text-orange-800 hover:bg-orange-200'
        };
      default:
        return {
          label: status,
          className: 'bg-gray-100 text-gray-800'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Badge className={`${config.className} ${className}`}>
      {config.label}
    </Badge>
  );
};
