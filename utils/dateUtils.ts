export function calculateSeason() {
    const month = new Date().getMonth() + 1;

    if (month >= 4 && month <= 6) return 'Xuân';
    else if (month >= 7 && month <= 9) return 'Hạ';
    else if (month >= 10 && month <= 12) return 'Thu';
    else if (month >= 1 && month <= 3) return 'Đông';
}

export function calculateDiffDate(target: Date) {
    /*
    i don't use
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
    because finally need to compare value to pass option 'day', 'month', 'year',...
    */

    // seconds
    const diff = Math.floor(
        (new Date(Date.now()).getTime() - new Date(target).getTime()) / 1000,
    );

    if (diff < 60) {
        return `${diff} giây trước`;
    }

    if (Math.floor(diff / 60) < 60) {
        return `${Math.floor(diff / 60)} phút trước`;
    }

    if (Math.floor(diff / 60 / 60) < 24) {
        return `${Math.floor(diff / 60 / 60)} giờ trước`;
    }

    if (Math.floor(diff / 60 / 60 / 24) < 31) {
        return `${Math.floor(diff / 60 / 60 / 24)} ngày trước`;
    }

    if (Math.floor(diff / 60 / 60 / 24 / 31) < 12) {
        return `${Math.floor(diff / 60 / 60 / 24 / 31)} tháng trước`;
    }

    return `${Math.floor(diff / 60 / 60 / 24 / 31 / 12)} năm  trước`;
}

/**
 * Convert API date string to relative time
 * @param dateString - Date string from API (e.g., "2025-05-22T09:00:19.04042")
 * @returns Relative time string (e.g., "2 giờ trước", "3 ngày trước")
 */
export function convertDate(dateString: string): string {
    if (!dateString) {
        return 'Vừa xong';
    }

    try {
        // Parse the date string from API
        const date = new Date(dateString);
        
        // Check if date is valid
        if (isNaN(date.getTime())) {
            return 'Vừa xong';
        }

        // Calculate difference from now
        const diff = Math.floor(
            (new Date(Date.now()).getTime() - date.getTime()) / 1000,
        );

        if (diff < 0) {
            return 'Vừa xong';
        }

        if (diff < 60) {
            return `${diff} giây trước`;
        }

        const minutes = Math.floor(diff / 60);
        if (minutes < 60) {
            return `${minutes} phút trước`;
        }

        const hours = Math.floor(diff / 60 / 60);
        if (hours < 24) {
            return `${hours} giờ trước`;
        }

        const days = Math.floor(diff / 60 / 60 / 24);
        if (days < 31) {
            return `${days} ngày trước`;
        }

        const months = Math.floor(diff / 60 / 60 / 24 / 30.44); // Average days per month
        if (months < 12) {
            return `${months} tháng trước`;
        }

        const years = Math.floor(diff / 60 / 60 / 24 / 365.25); // Average days per year
        return `${years} năm trước`;

    } catch (error) {
        console.error('Error converting date:', error);
        return 'Vừa xong';
    }
}

/**
 * Format date to Vietnamese locale
 * @param dateString - Date string from API
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
    if (!dateString) {
        return '';
    }

    try {
        const date = new Date(dateString);
        
        if (isNaN(date.getTime())) {
            return '';
        }

        return date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    } catch (error) {
        console.error('Error formatting date:', error);
        return '';
    }
}

/**
 * Get time ago with more precise calculation
 * @param dateString - Date string from API
 * @returns Time ago string
 */
export function getTimeAgo(dateString: string): string {
    return convertDate(dateString);
} 